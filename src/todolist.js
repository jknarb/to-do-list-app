import {addNewListFunctions} from './newlist';

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

        //7. Render local storage tasks
        (function renderStoredTasks ( ) {

            const todoList = addNewListFunctions.getList();
            console.log('This is the todolist');
            console.log(todoList);
            const index = todoList.findIndex(object => object.name == listName);
            const taskArray = todoList[index].taskArray;
        
            taskArray.forEach( ( task ) => {
                const taskName = task.taskInputName;
                const taskDescription = task.taskInputDescription;
                const taskDate = task.taskInputDate;
    
                const createDiv = document.createElement('div');
                const createContentDiv = document.createElement('div');
                const createInput = document.createElement('input');
                const createh4Name = document.createElement('h4');
                const createh4Description = document.createElement('h4');
                const createh4Date =  document.createElement('h4');
                
                createh4Date.classList.add('task-date');
                createh4Date.textContent = taskDate;
                createh4Description.classList.add('task-description');
                createh4Description.textContent = taskDescription;
                createh4Name.classList.add('task-name');
                createh4Name.textContent = taskName;
    
                createContentDiv.classList.add('input-and-name-container');
    
                createInput.classList.add('task-checkbox');
                createInput.setAttribute('type', 'checkbox');
    
                createDiv.classList.add('task-container-div');
    
                createContentDiv.appendChild(createInput);
                createContentDiv.appendChild(createh4Name);
    
                createDiv.appendChild(createContentDiv);
                createDiv.appendChild(createh4Description);
                createDiv.appendChild(createh4Date);
    
                contentContainer2.appendChild(createDiv);

            });

        })( )
        
        return this;
    }
};


function runToDoList ( ) {

    todolistfunctions.renderToDoList();

}

export {runToDoList,todolistfunctions};
