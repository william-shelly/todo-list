// eXXX = HTML Element
// XXX_txt = string variable
// XXXBtn

let toDoListContainer, toDoListArray, toDoList, appName_txt, eAppTitle, eAppName, eAddToDoItem, eAddToDoItemBtn, eListItemDeleteBtn, eDeleteBtns;

appName_txt = 'William\'s To Do List';

/* ELEMENTS */

toDoListContainer = document.querySelector('#toDoList');

eAppTitle = document.querySelector('title');

eAppName = document.querySelector('h1.appName');

eAddToDoItem = document.querySelector('#addToDoItem_input_txt');
eAddToDoItemBtn = document.querySelector('#addToDoItem_btn');

/* /ELEMENTS */

eAppTitle.innerText = appName_txt;

eAppName.innerHTML = appName_txt;

toDoListArray = [
    {   "item": "WORK ON SPEXTON",
        "status": false
    },
    {   "item": "WORK ON AIR-O",
        "status": false
    },
    {   "item": "Fix Fence",
        "status": false
    },
    {   "item": "Wash Car",
        "status": false
    },
    {   "item": "Clean Interior",
        "status": false
    },
    {   "item": "Get Groceries",
        "status": true
    },
    {   "item": "Fly Kite",
        "status": false
    }
];

/* NOTE: THIS IS TO TEST IF toDoListArray is NULL */
// toDoListArray = null;
/* /NOTE: THIS IS TO TEST IF toDoListArray is NULL */

/* NOTE: LOCAL STORAGE NOTE */
/* This will add the files to Local Storage */
//localStorage.setItem('toDoList', JSON.stringify(toDoListArray));
//toDoList = JSON.parse(localStorage.getItem('toDoList'));
/* /NOTE: LOCAL STORAGE NOTE */

/* FUNCTIONS */

function buildListItems(i) {
    let eLabel, eInput, listItem;
    // create label
    eLabel = document.createElement('label');
    // label .list-group-item
    eLabel.className = 'list-group-item align-baseline position-relative';
    // create input
    eInput = document.createElement('input');
    // input .form-check-input .me-0
    eInput.className = 'form-check-input m-0 me-2 align-baseline';
    // input [type='checkbox'] [value='']
    eInput.setAttribute('type', 'checkbox');
    eInput.setAttribute('value', toDoList[i].status);
    if (toDoList[i].status === true) {
        eInput.setAttribute('CHECKED', '');
    }
    // item coffee
    listItem = document.createTextNode(toDoList[i].item);

    // Delete Button
    eListItemDeleteBtn = document.createElement('button');
    eListItemDeleteBtn.className = 'btn bg-transparent text-danger m-0 px-1 py-0 border-0 align-baseline position-absolute end-0 delete_btn';
    eListItemDeleteBtn.setAttribute('type', 'button');
    eListItemDeleteBtn.setAttribute('id', 'deleteBtn' + i);
    eListItemDeleteBtn.innerHTML ='<i class="fas fa-times-circle"></i>';

    eLabel.appendChild(eInput);
    eLabel.appendChild(listItem);
    eLabel.appendChild(eListItemDeleteBtn);

    toDoListContainer.appendChild(eLabel, toDoListContainer);
}

/* /FUNCTIONS */

/* EVENTS */

document.addEventListener('DOMContentLoaded', function(){
    toDoList = toDoListArray;
    if (toDoList === undefined || toDoList === null ) {
        console.log('empty');
    } else {
        for (let i = 0; i < toDoList.length; i++ ) {
            console.log(toDoList[i]);
            buildListItems(i);
        }
    }

    eDeleteBtns = document.querySelectorAll('.delete_btn');

    if (eDeleteBtns !== null || eDeleteBtns !== undefined) {
        if (eDeleteBtns.length > 0) {
            for (let i = 0; i < eDeleteBtns.length; i++) {
                eDeleteBtns[i].addEventListener(
                "click",
                    function(e){
                        this.parentNode.remove();
                        toDoList[i].remove();
                        console.log(toDoList);
                    }
                );
            }
        }
    }
    if (eAddToDoItemBtn !== null || eAddToDoItemBtn !== undefined) {
        eAddToDoItemBtn.addEventListener(
        "click",
            function(e){
                toDoList.push({"item":"Drive Truck","status":false});
            }
        );
    }
});

/* /EVENTS */

/* Tried to add e and i to the init variables list.
Received an error on
74 eInput.setAttribute('value', toDoList[i].status);

Need to be able to update array and rebuild HTML do list.

Ask about this in class. What is the best approach.

buildListItems() needs to have functions shared with addListItems()

Need to also build removeListItems() <- This is sort of built.

*/
