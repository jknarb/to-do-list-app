import {runAddNewTask} from './newtask';

const todolistfunctions = {

    renderToDoList: function ( ) {

        const allNewlist = Array.from(document.querySelectorAll('#new-list'));

        const renderListbreakdown = todolistfunctions.renderListbreakdown;

        allNewlist.forEach(function(list) {
            list.addEventListener('click', function( e ){
                const target = e.target;

                if (target.tagName == 'P') {
                    renderListbreakdown(target.parentNode);
                } else {
                    renderListbreakdown(target);
                }
            });
        });
        return this;
    },

    renderListbreakdown: function ( listElement ) {
        
        // Creating list name and saving into listName;
        const elementClass = listElement.classList.value;
        const listName = elementClass.split('-')[0];

        //select main container
        const listContainer = document.querySelector('.content-div-2');
        //1. reset container
        listContainer.innerHTML = "";

        //2.Create 2 divs
        (function createTwoContainerDivs ( ) {
            let i = 1;
            let numOfDivs = 4;

            for(i; i < numOfDivs; i++) {
                const createDiv = document.createElement('div');

                createDiv.classList.add('todolist-content-container',`container-${i}`);

                listContainer.appendChild(createDiv);
            }
        })( );

        //3. Add content to todolist-content-container-1
        const contentContainers = document.querySelectorAll('.todolist-content-container');
        const contentContainer1 = contentContainers[0];
        const contentContainer2 = contentContainers[1];
        const contentContainer3 = contentContainers[2];

        //4. Create 2 divs
        (function createContentDivs ( ) {
            let i = 1;
            let numOfDivs = 3;

            for(i; i < numOfDivs; i++) {
                const createDiv = document.createElement('div');
                const createH2 = document.createElement('h2');

                if (i === 1) {
                    createH2.setAttribute('id','listname');
                    createH2.textContent = listName;
                    createDiv.appendChild(createH2);
                    createDiv.classList.add('todolist-content','list-name');
                } else if ( i === 2 ) {
                    createH2.textContent = "Date Due";
                    createDiv.appendChild(createH2);
                    createDiv.classList.add('todolist-content','filter');
                }

                contentContainer1.appendChild(createDiv);

            }

        })();

        //5. Create add task option
        (function createAddTask () {
            const createContainerDiv = document.createElement('div');
            const createContentDiv = document.createElement('div');

            createContainerDiv.classList.add('add-task-container');
            createContentDiv.classList.add('add-task-content');
            
            const createAddSign = document.createElement('i');
            const createH3 = document.createElement('h3');

            createAddSign.classList.add('add-icon','fas', 'fa-plus-circle');
            createH3.classList.add('add-task-name');
            createH3.textContent = 'Add Task';

            createContentDiv.appendChild(createAddSign);
            createContentDiv.appendChild(createH3);
            createContainerDiv.appendChild(createContentDiv);
            contentContainer2.appendChild(createContainerDiv);
        })();

        //6. Create Edit button in container div
        (function createEditButton () {
            const createBtn = document.createElement('div');
            const buttonText = document.createElement('p');

            createBtn.classList.add('edit-button');
            buttonText.textContent = 'Edit Tasks';

            createBtn.appendChild(buttonText);
            contentContainer3.appendChild(createBtn);
        })( );

        return this;
    }
};


function runToDoList ( ) {

    todolistfunctions.renderToDoList();

}

export {runToDoList,todolistfunctions};
