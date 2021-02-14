const renderPageFunctions = {
    //1. Render Page main container divs
    renderContainerDivs: function() {
        const body = document.querySelector('body'); //container selector
        //Create 2 divs using for loops
        let i = 2; //number of loops
        let numberOfDivs = 0; // Number of loops to reach going backwards (using prepend)
        for (i; i>numberOfDivs; i--) {
            const mainContainerDiv = document.createElement('div'); //Create Div node
            mainContainerDiv.classList.add(`main-container-div-${i}`); //add class to created Div
            body.prepend(mainContainerDiv); //pre-pend the node to container
        }
        return this;//return function --> chain the methods
    },

    //2. Render content divs in container divs
    renderContentdivs: function ( ) {
        const contentContainer = document.querySelector('.main-container-div-2'); //container selector

        //create 2 content divs
        let i = 1; //Starting number
        let numberOfDivs = 3; //number of divs
        for (i; i<numberOfDivs; i++) { 
            const contentDiv = document.createElement('div'); //Create divs
            contentDiv.classList.add(`content-div-${i}`); //Add class to created divs
            contentContainer.append(contentDiv); //Append the created div to container
        }
        return this;//return function --> chain the methods
    },
    //3. Render Nav contents --> container div --> logo and menu button
    renderNavContents: function ( ) {
        const container = document.querySelector('.main-container-div-1'); //Selector for container
        const createImg = document.createElement('img'); //create node 'img'
        const createDiv = document.createElement('div');//create node 'div'
        const hamburgerMenu = "<i class='menu-icon fas fa-bars'></i>"; //store the icon class to variable
        createImg.classList.add('logo'); //Add class to created img
        createImg.setAttribute('src', '/dist/resources/Images/logo.png'); //Set attribute of the node 'img' to source file'
        container.appendChild(createImg); //Append the img node to the container
        createDiv.classList.add('container-hamburger-menu'); //add class to the the created div
        createDiv.innerHTML = hamburgerMenu; //edit the innerhtml of the div to hamburgerMenu
        container.appendChild(createDiv); //append the div + hamburgerMenu to the container div
        return this;//return function --> chain the methods
    },
    //4. Render Create list button
    renderCreateListbutton: function ( ) {
        const container = document.querySelector('.content-div-1'); //container selector
        const createButton = document.createElement('button'); //Create button node
        createButton.classList.add('create-new-list-button'); //Add class to button node
        createButton.textContent = " + Create New List"; // Add test to button node
        container.appendChild(createButton); //Append the button node to container
        return this;//return function --> chain the methods
    },

    //5. Create a container for new lists
    renderListContainer: function ( ) {
        const container = document.querySelector('.content-div-1'); //container selector
        const createDiv = document.createElement('div'); //Create div
        createDiv.classList.add('lists'); //Add class to create div
        container.appendChild(createDiv); //Append the created div to container
        return this;//return function --> chain the methods
    },

    renderModalprompt: function ( ) {

        //Main container + Content container
        const container = document.querySelector('.content-div-1'); //container selector --> where modal will go under
        const createModalContainer = document.createElement('div'); //Create modal MAIN container div
        const createModalContent = document.createElement('div'); //Create modal CONTENT div
        //Modal header
        const createModalHeaderDiv = document.createElement('div'); //Create container for modal Header
        const createModalHeaderH2 = document.createElement('h2'); //Create H2 node for modal header
        const createSpan = document.createElement('span'); //Create a span node for cross i.e. close button
        //Modal body
        const createModalBodyDiv = document.createElement('div'); //Create div for modal body
        const createModalBodyP = document.createElement('p'); //create p node
        const createModalBodyInput = document.createElement('input'); //Create input node
        const createModalSubmitBtn = document.createElement('button'); //Create button node

        //Modal header Content Nodes
        createSpan.classList.add('close'); //Add class to close button node
        createSpan.textContent = '×'; //Edit text to span close button
        createModalHeaderH2.textContent = "New list:" //Edit text content of H2 node

        createModalHeaderDiv.classList.add("modal-header"); //Add class to modal header div
        createModalHeaderDiv.appendChild(createSpan); //Append span/closs button to headerdiv
        createModalHeaderDiv.appendChild(createModalHeaderH2); //Append modal h2

        // Modal Body Content Nodes
        createModalBodyP.textContent = "What would you like to call your new list?"; //Edit modal content P node with text
        createModalBodyInput.setAttribute('placeholder', "Your new list name"); //Set placeholder attributes of input nodes
        createModalBodyInput.setAttribute('id', 'newListName'); // set id attribute of input node
        createModalSubmitBtn.classList.add("submit-list-name"); // Add class to submit button
        createModalSubmitBtn.textContent = "Submit"; // Add text content to submit button

        createModalBodyDiv.classList.add("modal-body"); //Add class to modal body div
        createModalBodyDiv.appendChild(createModalBodyP); //Append modal body p node to modal body div
        createModalBodyDiv.appendChild(createModalBodyInput);//Append modal body input node to modal body div
        createModalBodyDiv.appendChild(createModalSubmitBtn); //Append modal body submit button to modal body div

        //Modal CONTENT Container
        createModalContent.classList.add('modal-content'); //Add class to modal content container
        createModalContent.appendChild(createModalHeaderDiv); //Append the modal header div to modal content container
        createModalContent.appendChild(createModalBodyDiv); // Append the modal body div to the modal content container

        //Modal MAIN Container  
        createModalContainer.setAttribute('id','myModal'); //Set the id attribute ot the modal main container
        createModalContainer.classList.add('modal'); //Add class to the modal main container
        createModalContainer.appendChild(createModalContent); //Append the modal content container to the main modal container
        container.appendChild(createModalContainer); //Append the modal main container to the Layout content container (upper level)

        return this;//return function --> chain the methods
    },
}

function renderPage ( ) {
    renderPageFunctions
    .renderContainerDivs() //Create Main container divs
    .renderContentdivs() // Create content divs inside main container divs
    .renderNavContents() //Create Nav div inside content divs
    .renderCreateListbutton() //Create Create list button inside content div
    .renderListContainer() //Create new list container div
    .renderModalprompt(); //Add a hidden modal floating modal to the layout
}

export {renderPageFunctions,renderPage};