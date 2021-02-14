import {addNewListFunctions} from './newlist';

const editTaskFunctions = {

    resetTaskBar: function ( e ) {
                    
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
        e.appendChild(createContainerDiv);
    },

    editTask: function (listName) {

        //1. Print remove icon on each task
        
        //1.1 Task containers selector
        const taskContainer = document.querySelectorAll('.task-container-div');
        //1.2 Use for each
        taskContainer.forEach((task) => {

            const createI = document.createElement('i');
            createI.classList.add('remove-icon','fas', 'fa-minus-circle');
            task.appendChild(createI);

        });

        //Add event Handler for the remove-icons
        const removeBtns = document.querySelectorAll('.remove-icon');
        
        removeBtns.forEach((button) => {
            button.addEventListener('click', function( ){

                const listArray = addNewListFunctions.listArray;
                const targetObject = listArray.filter(object => object.name == listName)[0];
                let taskArray = targetObject.taskArray;
                //1. remove child elements and replace add-task bar
                const contentContainers = document.querySelectorAll('.todolist-content-container');
                const contentContainer2 = contentContainers[1];
                contentContainer2.innerHTML = '';
                editTaskFunctions.resetTaskBar(contentContainer2);
                const taskSelector = button.parentNode.firstChild.children[1].textContent;
                const newtaskArray = taskArray.filter(object => object.taskInputName != taskSelector);
                taskArray = newtaskArray;
                //Write code to render all the list again with the remove icon
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
            });
        });
    },

}

function editTask ( ) {

    const mainContainer = document.querySelector('.content-div-2');

    mainContainer.addEventListener('click', function (event) {

        const listContainer = document.querySelector('.lists');
        let eventTarget = event.target;
        if (listContainer.childNodes.length == 0) return;
        if (eventTarget.tagName == 'P') {
            eventTarget = eventTarget.parentNode;
        }
        if (!eventTarget.classList.contains('edit-button')) return;
        let submitButton = event.target.closest('div');
        if (!submitButton) return
        if (!mainContainer.contains(submitButton)) return;

        const listName = document.getElementById('listname').textContent;
        editTaskFunctions.editTask(listName);

    });

}

export {editTask};