import {renderPage} from './layout';
import {runNewListFunction} from './newlist';
import {runToDoList} from './todolist';
import {runAddTaskInput,renderNewTask} from './newtask';
import {editTask} from './edits';

(function runMyToDoList( ) {

    renderPage();
    runNewListFunction();
    runToDoList();
    runAddTaskInput();
    renderNewTask();
    editTask();

})( );
