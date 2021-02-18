var fiche = {
    body: document.querySelector('#fiche'),
    content: document.querySelector('#fiche-content'),
    entete: document.querySelector('#fiche-entete'),
    currentEntityId: undefined,
    toggle: document.querySelector('#fiche-toggle'),
    isOpen: false,
    fields: {
        lien: document.querySelector('#fiche-meta-lien'),
        img: document.querySelector('#fiche-meta-img'),
        label: document.querySelector('#fiche-meta-label'),
        title: document.querySelector('#fiche-meta-title'),
        categorie: document.querySelector('#fiche-meta-categorie'),
        description: document.querySelector('#fiche-meta-description'),
        connexion: document.querySelector('#fiche-connexion'),
        permalien: document.querySelector('#fiche-permalien')
    },

    fixer: function(bool) {
        if (bool) { fiche.body.classList.add('lateral--fixed'); }
        else { fiche.body.classList.remove('lateral--fixed'); }
    },
    open: function() {
        this.toggle.classList.add('fiche__toggle-btn--active');
        fiche.body.classList.add('lateral--active');
        this.isOpen = true;
    },
    close: function() {
        if (movement.currentSection === 'fiches') { return; }
        
        this.toggle.classList.remove('fiche__toggle-btn--active');
        fiche.body.classList.remove('lateral--active');
        this.isOpen = false;
    },
    canClose: function(bool) {
        if (bool) { this.toggle.classList.remove('d-none'); }
        else { this.toggle.classList.add('d-none'); }
    },
    setImage: function(entitePhoto, entiteLabel) {
        this.fields.img.setAttribute('src', entitePhoto);
        this.fields.img.setAttribute('alt', 'photo de ' + entiteLabel);
    },
    setLink: function(lien) {
        if (lien === null) {
            this.fields.lien.classList.remove('fiche__lien--visible')
            this.fields.lien.setAttribute('href', '')
        } else {
            this.fields.lien.classList.add('fiche__lien--visible')
            this.fields.lien.setAttribute('href', lien)
        }
    },
    setMeta: function(meta, content) {
        if (meta === null) {
            content.innerHTML = ''; }
        else {
            content.innerHTML = meta; }
    },
    setPermaLink: function(nodeId) {
        this.fields.permalien.addEventListener('click', () => {
            const btnOriginalText = this.fields.permalien.textContent
                , tempInput = document.createElement('input');

            document.body.appendChild(tempInput);
            tempInput.value = window.location.protocol + '//' + window.location.host + window.location.pathname;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            this.fields.permalien.classList.add('fiche__permalien--active');
            this.fields.permalien.textContent = '✓';
            
            this.fields.permalien.addEventListener('animationend', () => {
                this.fields.permalien.textContent = btnOriginalText ;
                this.fields.permalien.classList.remove('fiche__permalien--active')
            });
        });
    },
    setConnexion: function(nodeConnectedList) {
        this.fields.connexion.innerHTML = '';

        if (nodeConnectedList === null) { return; }

        var list = document.createElement('ul');
        list.classList.add('connexions__list');
        this.fields.connexion.appendChild(list);

        for (let i = 0; i < nodeConnectedList.length; i++) {
            const connectedNode = nodeConnectedList[i];

            if (connectedNode.hidden == true) {
                continue;
            }

            var listElt = document.createElement('li');
            listElt.classList.add('connexions__elt');
            listElt.textContent = connectedNode.label;
            this.fields.connexion.appendChild(listElt);

            var puceColored = document.createElement('span');
            puceColored.classList.add('connexions__puce');
            puceColored.style.backgroundColor = chooseColor(connectedNode.relation);
            listElt.prepend(puceColored);

            listElt.addEventListener('click', () => {
                switchNode(connectedNode.id);
                historique.actualiser(connectedNode.id);
            });

            if (connectedNode.title !== null) {
                listElt.addEventListener('mouseenter', (e) => {
                    overflow.classList.add('overflow--active');
                    overflow.style.left = e.pageX + 20 + 'px';
                    overflow.style.top = e.pageY - overflow.offsetHeight + 'px';
                    overflow.textContent = connectedNode.title;
                })

                listElt.addEventListener('mouseout', () => {
                    overflow.classList.remove('overflow--active');
                })
            }
        }
    },
    fill: function() {
        const nodeMetas = getNodeMetas(network.selectedNode)
        if (nodeMetas === false)  { return ; }
        const nodeConnectedList = findConnectedNodes(network.selectedNode);

        // affichage du contenant
        this.content.classList.add('fiche__content--visible');

        // remplissage métadonnées
        this.setMeta(nodeMetas.label, this.fields.label);
        this.setMeta(nodeMetas.title, this.fields.title);
        this.setImage(nodeMetas.image, nodeMetas.label);
        this.setLink(nodeMetas.lien);
        this.setMeta(nodeMetas.categorie, this.fields.categorie);
        this.setMeta(nodeMetas.description, this.fields.description);
        this.setPermaLink(network.selectedNode);

        this.setConnexion(nodeConnectedList);
    }
}

fiche.toggle.addEventListener('click', () => {
    // toggle close and open du lateral fiche
    if (fiche.isOpen) { fiche.close(); }
    else { fiche.open(); }
});

const overflow = document.querySelector('#overflow');

fiche.fields.img.addEventListener('click', () => {
    // au clic sur l'image : zoom sur le nœud contenu dans la mémoire
    switchNode(network.selectedNode);
});