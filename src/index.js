import {renderPage} from './layout';
import {runNewListFunction} from './newlist';
import {runToDoList} from './todolist';
import {runAddTaskInput,renderNewTask} from './newtask';
import {editTask} from './edits';
import {preloadFunctions} from './pre-load';

(function runMyToDoList( ) {

    renderPage();
    preloadFunctions.preloadList;
    runNewListFunction();
    runToDoList();
    runAddTaskInput();
    renderNewTask();
    editTask();

})( );
