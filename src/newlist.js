import {todolistfunctions} from './todolist';

const addNewListFunctions = {

    listArray: [],

    newList: class {

        constructor (listname) {
            this.name = listname;
            this.taskArray = [];
        }
    },

    modalPromptFunctions: function ( ) {

        const addlistButton = document.querySelector('.create-new-list-button');
        const modal = document.getElementById('myModal');
        const span = document.querySelector('.close');

        addlistButton.addEventListener('click', function () {
            modal.style.display = "block";
        });

        span.addEventListener('click', function() {
            modal.style.display = "none";
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

        return this
    },

    modalSubmitListName: function ( ) {

        const submitButton = document.querySelector('.submit-list-name');
        const modal = document.getElementById('myModal');
        const listNameInput = document.getElementById('newListName');
        const listArray = this.listArray;
        const newList = this.newList;
        const renderToDoList = todolistfunctions.renderToDoList;

        submitButton.addEventListener('click', function ( ) {

            const listName = listNameInput.value;
            const createNewList = new newList(listName);
            const listDiv = document.querySelector('.lists');

            modal.style.display = "none";

            listDiv.innerHTML = "";
        
            listArray.push(createNewList);
            listArray.forEach(function(list) {

                const createDiv = document.createElement('div');
                const createP1 = document.createElement('p');
                const createSpan = document.createElement('span');

                createSpan.classList.add("remove-list");
                createSpan.textContent = '×';
                createP1.textContent = list.name;
                createDiv.appendChild(createP1);
                createDiv.appendChild(createSpan);

                createDiv.classList.add(list.name + '-list');
                createDiv.setAttribute('id', 'new-list');

                listDiv.appendChild(createDiv);
                

            });

        renderToDoList();

        });
        
        return this
    },

}

function runNewListFunction () {

    addNewListFunctions.modalPromptFunctions().modalSubmitListName();

}

export {runNewListFunction,addNewListFunctions};

