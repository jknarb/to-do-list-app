import {addNewListFunctions} from './newlist';
import {todolistfunctions} from './todolist';

const preloadFunctions = {
    
    renderStoredList: function ( e ) {

        if (e.length == 0 ) return;

        e.forEach(( e ) => {
            const listName = e.name;
            const listDiv = document.querySelector('.lists');
            const createDiv = document.createElement('div');
            const createP1 = document.createElement('p');
            const createSpan = document.createElement('span');
            createSpan.classList.add("remove-list");
            createSpan.textContent = '×';
            createP1.textContent = listName;
            createDiv.appendChild(createP1);
            createDiv.appendChild(createSpan); 
            createDiv.classList.add(listName + '-list');
            createDiv.setAttribute('id', 'new-list');
            listDiv.appendChild(createDiv);
            todolistfunctions.renderToDoList();
        });
        
            
    },

    preloadList: window.addEventListener('load', function( ){

        preloadFunctions.renderStoredList(addNewListFunctions.getList());

        console.log('This is the localstorage:')
        console.log(this.localStorage);

    }),

    

}


export {preloadFunctions};