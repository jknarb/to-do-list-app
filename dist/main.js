(()=>{"use strict";const t={renderContainerDivs:function(){const t=document.querySelector("body");let e=2;for(;e>0;e--){const n=document.createElement("div");n.classList.add(`main-container-div-${e}`),t.prepend(n)}return this},renderContentdivs:function(){const t=document.querySelector(".main-container-div-2");let e=1;for(;e<3;e++){const n=document.createElement("div");n.classList.add(`content-div-${e}`),t.append(n)}return this},renderNavContents:function(){const t=document.querySelector(".main-container-div-1"),e=document.createElement("img"),n=document.createElement("div");return e.classList.add("logo"),e.setAttribute("src","/dist/resources/Images/logo.png"),t.appendChild(e),n.classList.add("container-hamburger-menu"),n.innerHTML="<i class='menu-icon fas fa-bars'></i>",t.appendChild(n),this},renderCreateListbutton:function(){const t=document.querySelector(".content-div-1"),e=document.createElement("button");return e.classList.add("create-new-list-button"),e.textContent=" + Create New List",t.appendChild(e),this},renderListContainer:function(){const t=document.querySelector(".content-div-1"),e=document.createElement("div");return e.classList.add("lists"),t.appendChild(e),this},renderModalprompt:function(){const t=document.querySelector(".content-div-1"),e=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("h2"),s=document.createElement("span"),i=document.createElement("div"),c=document.createElement("p"),o=document.createElement("input"),r=document.createElement("button");return s.classList.add("close"),s.textContent="×",a.textContent="New list:",d.classList.add("modal-header"),d.appendChild(s),d.appendChild(a),c.textContent="What would you like to call your new list?",o.setAttribute("placeholder","Your new list name"),o.setAttribute("id","newListName"),r.classList.add("submit-list-name"),r.textContent="Submit",i.classList.add("modal-body"),i.appendChild(c),i.appendChild(o),i.appendChild(r),n.classList.add("modal-content"),n.appendChild(d),n.appendChild(i),e.setAttribute("id","myModal"),e.classList.add("modal"),e.appendChild(n),t.appendChild(e),this}},e={renderToDoList:function(){const t=Array.from(document.querySelectorAll("#new-list")),n=e.renderListbreakdown;return t.forEach((function(t){t.addEventListener("click",(function(t){const e=t.target;"P"==e.tagName?n(e.parentNode):n(e)}))})),this},renderListbreakdown:function(t){const e=t.classList.value.split("-")[0],d=document.querySelector(".content-div-2");d.innerHTML="",function(){let t=1;for(;t<4;t++){const e=document.createElement("div");e.classList.add("todolist-content-container",`container-${t}`),d.appendChild(e)}}();const a=document.querySelectorAll(".todolist-content-container"),s=a[0],i=a[1],c=a[2];return function(){let t=1;for(;t<3;t++){const n=document.createElement("div"),d=document.createElement("h2");1===t?(d.setAttribute("id","listname"),d.textContent=e,n.appendChild(d),n.classList.add("todolist-content","list-name")):2===t&&(d.textContent="Date Due",n.appendChild(d),n.classList.add("todolist-content","filter")),s.appendChild(n)}}(),function(){const t=document.createElement("div"),e=document.createElement("div");t.classList.add("add-task-container"),e.classList.add("add-task-content");const n=document.createElement("i"),d=document.createElement("h3");n.classList.add("add-icon","fas","fa-plus-circle"),d.classList.add("add-task-name"),d.textContent="Add Task",e.appendChild(n),e.appendChild(d),t.appendChild(e),i.appendChild(t)}(),function(){const t=document.createElement("div"),e=document.createElement("p");t.classList.add("edit-button"),e.textContent="Edit Tasks",t.appendChild(e),c.appendChild(t)}(),function(){const t=n.getList();if(null==t)return;const d=t.findIndex((t=>t.name==e));t[d].taskArray.forEach((t=>{const e=t.taskInputName,n=t.taskInputDescription,d=t.taskInputDate,a=document.createElement("div"),s=document.createElement("div"),c=document.createElement("input"),o=document.createElement("h4"),r=document.createElement("h4"),l=document.createElement("h4");l.classList.add("task-date"),l.textContent=d,r.classList.add("task-description"),r.textContent=n,o.classList.add("task-name"),o.textContent=e,s.classList.add("input-and-name-container"),c.classList.add("task-checkbox"),c.setAttribute("type","checkbox"),a.classList.add("task-container-div"),s.appendChild(c),s.appendChild(o),a.appendChild(s),a.appendChild(r),a.appendChild(l),i.appendChild(a)}))}(),this}},n={listArray:[],newList:class{constructor(t){this.name=t,this.taskArray=[]}},storeList:function(t){localStorage.setItem("lists",JSON.stringify(t))},getList:function(){return JSON.parse(localStorage.getItem("lists"))},modalPromptFunctions:function(){const t=document.querySelector(".create-new-list-button"),e=document.getElementById("myModal"),n=document.querySelector(".close");return t.addEventListener("click",(function(){e.style.display="block"})),n.addEventListener("click",(function(){e.style.display="none"})),window.addEventListener("click",(function(t){t.target==e&&(e.style.display="none")})),this},addListtoContainer:function(){return n.getList().forEach((function(t){const e=document.querySelector(".lists"),n=document.createElement("div"),d=document.createElement("p"),a=document.createElement("span");a.classList.add("remove-list"),a.textContent="×",d.textContent=t.name,n.appendChild(d),n.appendChild(a),n.classList.add(t.name+"-list"),n.setAttribute("id","new-list"),e.appendChild(n)})),this},modalSubmitListName:function(){const t=document.querySelector(".submit-list-name"),d=document.getElementById("myModal"),a=document.getElementById("newListName");console.log("localStorage getList"),console.log(this.getList());let s=this.listArray;null!=this.getList()&&(s=this.getList()),console.log("This is the listArray:"),console.log(this.listArray);const i=this.newList,c=e.renderToDoList;return t.addEventListener("click",(function(){const t=a.value,e=new i(t),o=document.querySelector(".lists");d.style.display="none",o.innerHTML="",s.push(e),n.storeList(s),n.addListtoContainer(),c()})),this}},d={addTaskToObject:function(t){const e=n.getList(),d=document.querySelectorAll(".add-task-input"),a={taskInputName:d[0].value,taskInputDescription:d[1].value,taskInputDate:d[2].value},s=e.findIndex((e=>e.name==t));let i=[...e[s].taskArray];return i.push(a),e[s].taskArray=i,n.storeList(e),this},renderAddTaskBar:function(){const t=document.querySelector(".add-task-container"),e=document.querySelector(".add-task-content"),n=document.createElement("button");let d=0;for(e.innerHTML="",t.classList.add("adding-task-mode");d<3;d++){const t=document.createElement("input");t.classList.add("add-task-input"),0===d?(t.setAttribute("placeholder","Input task name, e.g. Workout"),t.setAttribute("type","text")):1===d?(t.setAttribute("placeholder","Task Description e.g. Do 3 push-ups"),t.setAttribute("type","text")):2===d&&(t.setAttribute("placeholder","Input task due date e.g. 25/1/2021"),t.setAttribute("type","date")),e.appendChild(t)}n.classList.add("submit-task-info"),n.textContent="Create Task",e.appendChild(n)},renderNewTask:function(t){const e=document.querySelectorAll(".todolist-content-container")[1];e.innerHTML="",function(){const t=document.createElement("div"),n=document.createElement("div");t.classList.add("add-task-container"),n.classList.add("add-task-content");const d=document.createElement("i"),a=document.createElement("h3");d.classList.add("add-icon","fas","fa-plus-circle"),a.classList.add("add-task-name"),a.textContent="Add Task",n.appendChild(d),n.appendChild(a),t.appendChild(n),e.appendChild(t)}();const d=n.getList();console.log(d);const a=d.filter((e=>e.name==t))[0];console.log(a);const s=a.taskArray;console.log(s),s.forEach((t=>{const n=t.taskInputName,d=t.taskInputDescription,a=t.taskInputDate,s=document.createElement("div"),i=document.createElement("div"),c=document.createElement("input"),o=document.createElement("h4"),r=document.createElement("h4"),l=document.createElement("h4");l.classList.add("task-date"),l.textContent=a,r.classList.add("task-description"),r.textContent=d,o.classList.add("task-name"),o.textContent=n,i.classList.add("input-and-name-container"),c.classList.add("task-checkbox"),c.setAttribute("type","checkbox"),s.classList.add("task-container-div"),i.appendChild(c),i.appendChild(o),s.appendChild(i),s.appendChild(r),s.appendChild(l),e.appendChild(s)}))}},a={resetTaskBar:function(t){const e=document.createElement("div"),n=document.createElement("div");e.classList.add("add-task-container"),n.classList.add("add-task-content");const d=document.createElement("i"),a=document.createElement("h3");d.classList.add("add-icon","fas","fa-plus-circle"),a.classList.add("add-task-name"),a.textContent="Add Task",n.appendChild(d),n.appendChild(a),e.appendChild(n),t.appendChild(e)},editTask:function(t){document.querySelectorAll(".task-container-div").forEach((t=>{const e=document.createElement("i");e.classList.add("remove-icon","fas","fa-minus-circle"),t.appendChild(e)})),document.querySelectorAll(".remove-icon").forEach((e=>{e.addEventListener("click",(function(){const d=n.getList(),s=d.findIndex((e=>e.name==t));let i=d[s].taskArray;const c=document.querySelectorAll(".todolist-content-container")[1];c.innerHTML="",a.resetTaskBar(c);const o=e.parentNode.firstChild.children[1].textContent,r=i.filter((t=>t.taskInputName!=o));d[s].taskArray=r,n.storeList(d),d[s].taskArray.forEach((t=>{const e=t.taskInputName,n=t.taskInputDescription,d=t.taskInputDate,a=document.createElement("div"),s=document.createElement("div"),i=document.createElement("input"),o=document.createElement("h4"),r=document.createElement("h4"),l=document.createElement("h4");l.classList.add("task-date"),l.textContent=d,r.classList.add("task-description"),r.textContent=n,o.classList.add("task-name"),o.textContent=e,s.classList.add("input-and-name-container"),i.classList.add("task-checkbox"),i.setAttribute("type","checkbox"),a.classList.add("task-container-div"),s.appendChild(i),s.appendChild(o),a.appendChild(s),a.appendChild(r),a.appendChild(l),c.appendChild(a)}))}))}))}},s={renderStoredList:function(t){null!=t&&0!=t.length&&t.forEach((t=>{const n=t.name,d=document.querySelector(".lists"),a=document.createElement("div"),s=document.createElement("p"),i=document.createElement("span");i.classList.add("remove-list"),i.textContent="×",s.textContent=n,a.appendChild(s),a.appendChild(i),a.classList.add(n+"-list"),a.setAttribute("id","new-list"),d.appendChild(a),e.renderToDoList()}))},preloadList:window.addEventListener("load",(function(){s.renderStoredList(n.getList()),console.log("This is the localstorage:"),console.log(this.localStorage)}))};t.renderContainerDivs().renderContentdivs().renderNavContents().renderCreateListbutton().renderListContainer().renderModalprompt(),s.preloadList,n.modalPromptFunctions().modalSubmitListName(),e.renderToDoList(),function(){const t=document.querySelector(".content-div-2");t.addEventListener("click",(function(e){const n=document.querySelector(".lists"),a=e.target;if(0==n.childNodes.length)return;if(!a.classList.contains("add-icon"))return;let s=e.target.closest("i");s&&t.contains(s)&&d.renderAddTaskBar()}))}(),function(){const t=document.querySelector(".content-div-2");t.addEventListener("click",(function(e){if(0==document.querySelector(".lists").childNodes.length)return;let n=e.target.closest("button");if(!n)return;if(!t.contains(n))return;const a=document.getElementById("listname").textContent;d.addTaskToObject(a).renderNewTask(a)}))}(),function(){const t=document.querySelector(".content-div-2");t.addEventListener("click",(function(e){const n=document.querySelector(".lists");let d=e.target;if(0==n.childNodes.length)return;if("P"==d.tagName&&(d=d.parentNode),!d.classList.contains("edit-button"))return;let s=e.target.closest("div");if(!s)return;if(!t.contains(s))return;const i=document.getElementById("listname").textContent;a.editTask(i)}))}()})();