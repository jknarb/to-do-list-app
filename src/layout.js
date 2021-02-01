const renderPageFunctions = {
    
    renderContainerDivs: function() {
        const body = document.querySelector('body');
        let i = 2;
        let numberOfDivs = 0;
        for (i; i>numberOfDivs; i--) {
            const mainContainerDiv = document.createElement('div');
            mainContainerDiv.classList.add(`main-container-div-${i}`);
            body.prepend(mainContainerDiv);
        }
        return this;
    },

    renderContentdivs: function ( ) {
        const contentContainer = document.querySelector('.main-container-div-2');
        let i = 1;
        let numberOfDivs = 3;
        for (i; i<numberOfDivs; i++) {
            const contentDiv = document.createElement('div');
            contentDiv.classList.add(`content-div-${i}`);
            contentContainer.append(contentDiv);
        }
        return this
    },

    renderNavContents: function ( ) {

        const container = document.querySelector('.main-container-div-1');
        const createImg = document.createElement('img');
        const createDiv = document.createElement('div');
        const hamburgerMenu = "<i class='menu-icon fas fa-bars'></i>";

        createImg.classList.add('logo');
        createImg.setAttribute('src', '/dist/resources/Images/logo.png');
        container.appendChild(createImg);

        createDiv.classList.add('container-hamburger-menu');
        createDiv.innerHTML = hamburgerMenu;
        container.appendChild(createDiv);

        return this
    },

    renderCreateListbutton: function ( ) {

        const container = document.querySelector('.content-div-1');
        const createButton = document.createElement('button');

        createButton.classList.add('create-new-list-button');
        createButton.textContent = " + Create New List";
        container.appendChild(createButton);
        
        return this
    },

    renderListContainer: function ( ) {

        const container = document.querySelector('.content-div-1');
        const createDiv = document.createElement('div');

        createDiv.classList.add('lists');
        container.appendChild(createDiv);

        return this

    },

    renderModalprompt: function ( ) {

        const container = document.querySelector('.content-div-1');
        const createModalContainer = document.createElement('div');
        const createModalContent = document.createElement('div');

        const createModalHeaderDiv = document.createElement('div');
        const createModalHeaderH2 = document.createElement('h2');
        const createSpan = document.createElement('span');

        const createModalBodyDiv = document.createElement('div');
        const createModalBodyP = document.createElement('p');
        const createModalBodyInput = document.createElement('input');
        const createModalSubmitBtn = document.createElement('button');

        //Modal header Content Nodes
        createSpan.classList.add('close');
        createSpan.textContent = '×';
        createModalHeaderH2.textContent = "New list:"

        createModalHeaderDiv.classList.add("modal-header");
        createModalHeaderDiv.appendChild(createSpan); 
        createModalHeaderDiv.appendChild(createModalHeaderH2);

        // Modal Body Content Nodes
        createModalBodyP.textContent = "What would you like to call your new list?";
        createModalBodyInput.setAttribute('placeholder', "Your new list name");
        createModalBodyInput.setAttribute('id', 'newListName');
        createModalSubmitBtn.classList.add("submit-list-name");
        createModalSubmitBtn.textContent = "Submit";

        createModalBodyDiv.classList.add("modal-body");
        createModalBodyDiv.appendChild(createModalBodyP);
        createModalBodyDiv.appendChild(createModalBodyInput);
        createModalBodyDiv.appendChild(createModalSubmitBtn);

        //Modal CONTENT Container
        createModalContent.classList.add('modal-content');
        createModalContent.appendChild(createModalHeaderDiv);
        createModalContent.appendChild(createModalBodyDiv);

        //Modal MAIN Container
        createModalContainer.setAttribute('id','myModal');
        createModalContainer.classList.add('modal');
        createModalContainer.appendChild(createModalContent);
        container.appendChild(createModalContainer);

        return this
    }

}


function renderPage ( ) {

    console.log("%cRender page work", 'color: Red; font-weight: bold;');

    renderPageFunctions
    .renderContainerDivs()
    .renderContentdivs()
    .renderNavContents()
    .renderCreateListbutton()
    .renderListContainer()
    .renderModalprompt();
}

export {renderPageFunctions,renderPage};