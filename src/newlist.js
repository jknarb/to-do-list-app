import {todolistfunctions} from './todolist';

const addNewListFunctions = {
    //list Array to store newList created
    listArray: [],
    //Class with constructor to create new to do list as newList
    newList: class {
        constructor (listname) {
            this.name = listname;
            this.taskArray = [];
        }
    },

    storeList: function (e) {
        localStorage.setItem('lists', JSON.stringify(e));
    },

    getList:function () {
        return JSON.parse(localStorage.getItem('lists'));
    },

    modalPromptFunctions: function ( ) {

        //Selectors for modal pop-up
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

    addListtoContainer: function () {

        addNewListFunctions.getList().forEach(function(list) {
            const listDiv = document.querySelector('.lists');
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
        
        return this;
    },
    
    //Modal to input new list name
    modalSubmitListName: function ( ) {

        const submitButton = document.querySelector('.submit-list-name');
        const modal = document.getElementById('myModal');
        const listNameInput = document.getElementById('newListName');

        console.log('localStorage getList');
        console.log(this.getList());

        let listArray = this.listArray;

        if (this.getList() != null){
            listArray = this.getList();
        }

        console.log('This is the listArray:');
        console.log(this.listArray);

        const newList = this.newList;
        const renderToDoList = todolistfunctions.renderToDoList;

        submitButton.addEventListener('click', function ( ) {

            const listName = listNameInput.value;
            const createNewList = new newList(listName);
            const listDiv = document.querySelector('.lists');
            modal.style.display = "none";
            listDiv.innerHTML = "";
            listArray.push(createNewList);
            addNewListFunctions.storeList(listArray);
            addNewListFunctions.addListtoContainer();
            renderToDoList();
            
        });
        
        return this
    },

}

function runNewListFunction () {

    addNewListFunctions.modalPromptFunctions().modalSubmitListName();

}

export {runNewListFunction,addNewListFunctions};

