import {addNewListFunctions} from './newlist';

const newTaskFunctions = {

    addTaskToObject: function (listName) {

        //1. Select the Object that matches the list name. 
        const listArray = addNewListFunctions.listArray;
        const targetObject = listArray.filter(object => object.name == listName)[0];

        //2. Grab the input values from the task inputs and put as object.
        const taskInputs = document.querySelectorAll('.add-task-input');
        const taskInputName = taskInputs[0].value;
        const taskInputDescription = taskInputs[1].value;
        const taskInputDate = taskInputs[2].value;
        const taskInputsObject = {taskInputName,taskInputDescription,taskInputDate};

        //3. Push task Inputs into taskArray as an object
        targetObject.taskArray.push(taskInputsObject);

        return this;

    },

    renderAddTaskBar: function ( ) {
        const mainContainer = document.querySelector('.add-task-container');
        const ContentContainer = document.querySelector('.add-task-content');
        const createSubmitBtn = document.createElement('button');
        
        //Input and Labels components for adding task bar
        let i = 0;
        const numOfInputsAndLabels = 3;

        //1. Remove inner html content
        ContentContainer.innerHTML = '';

        //2. Add new class for styling to container
        mainContainer.classList.add('adding-task-mode');

        //3. Replace content with add input and labels
        for (i; i < numOfInputsAndLabels; i++) {
            const createInput = document.createElement('input');
            createInput.classList.add('add-task-input');

            if ( i === 0 ) {
                createInput.setAttribute('placeholder', 'Input task name, e.g. Workout');
                createInput.setAttribute('type', 'text');
            } else if ( i === 1 ) {
                createInput.setAttribute('placeholder', 'Task Description e.g. Do 3 push-ups');
                createInput.setAttribute('type', 'text');
            } else if ( i === 2 ) {
                createInput.setAttribute('placeholder', 'Input task due date e.g. 25/1/2021');
                createInput.setAttribute('type', 'date');
            }

            ContentContainer.appendChild(createInput);

        }

        //4. Append submit button:
        createSubmitBtn.classList.add('submit-task-info');
        createSubmitBtn.textContent = "Create Task";
        ContentContainer.appendChild(createSubmitBtn);
    },

    renderNewTask: function (listName) {
        
        //1. Reset the add task bar and add the add task bar back.
        const contentContainers = document.querySelectorAll('.todolist-content-container');
        const contentContainer2 = contentContainers[1];

        contentContainer2.innerHTML = '';

        (function resetTaskBar ( ) {
            
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

        // 2. Grab the information from the target Object
        const listArray = addNewListFunctions.listArray;
        const targetObject = listArray.filter(object => object.name == listName)[0];
        const taskArray = targetObject.taskArray;

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
    },

}



function runAddTaskInput () {

    const mainContainer = document.querySelector('.content-div-2');
    mainContainer.addEventListener('click', function (event) {

        //1st check to if list container contains any element

        //1. Select container
        const listContainer = document.querySelector('.lists')
        const eventTarget = event.target;
        //2. Check with if
        if (listContainer.childNodes.length == 0) return;
        if (!eventTarget.classList.contains('add-icon')) return;
        let icon = event.target.closest('i');
        if (!icon) return;
        if (!mainContainer.contains(icon)) return;
        
        newTaskFunctions.renderAddTaskBar();

    });
    
}

function renderNewTask ( ) {

    const mainContainer2 = document.querySelector('.content-div-2');
    mainContainer2.addEventListener('click', function (event) {

        //1st check to if list container contains any element
        //1. Select container
        const listContainer = document.querySelector('.lists');
        //2. Check with if
        if (listContainer.childNodes.length == 0) return;

        let submitButton = event.target.closest('button');
        if (!submitButton) return
        if (!mainContainer2.contains(submitButton)) return;

        const listName = document.getElementById('listname').textContent;
        newTaskFunctions.addTaskToObject(listName).renderNewTask(listName);;

    });

}

export {runAddTaskInput,renderNewTask};