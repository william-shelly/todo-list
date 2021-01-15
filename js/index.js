// eXXX = HTML Element
// XXX_txt = string variable
// XXXBtn

let toDoListApp, toDoListAddItemContainer, toDoListContainer, toDoListArray, toDoList, appName_txt, eAppTitle, eAppName, eAddToDoItem, eAddToDoItemBtn, eListItemDeleteBtn, eDeleteBtns, toDoListAddItemContainerHeight;

appName_txt = 'William\'s To Do List';

/* ELEMENTS */

toDoListApp = document.querySelector('#toDoListApp');

toDoListAddItemContainer = document.querySelector('#toDoListAddItemContainer');

toDoListContainer = document.querySelector('#toDoList');

eAppTitle = document.querySelector('title');

eAppName = document.querySelector('h1.appName');

eAddToDoItem = document.querySelector('#addToDoItem_input_txt');

eAddToDoItemBtn = document.querySelector('#addToDoItem_btn');

/* /ELEMENTS */

eAppTitle.innerText = appName_txt;

eAppName.innerHTML = appName_txt;

toDoListArray = [
    {   "id": 0,
        "item": "WORK ON SPEXTON",
        "status": false
    },
    {   "id": 1,
        "item": "WORK ON AIR-O",
        "status": false
    },
    {   "id": 2,
        "item": "Fix Fence",
        "status": false
    },
    {   "id": 3,
        "item": "Wash Car",
        "status": false
    },
    {   "id": 4,
        "item": "Clean Interior",
        "status": false
    },
    {   "id": 5,
        "item": "Get Groceries",
        "status": true
    },
    {   "id": 6,
        "item": "Fly Kite",
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

function createListItem() {
    console.log('run create list function');
}
function addListItem(listItemTxt, listItemStatus) {
    console.log('run add list function');

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
    eInput.setAttribute('value', listItemStatus);
    // item coffee
    listItem = document.createTextNode(listItemTxt);

    // Delete Button
    eListItemDeleteBtn = document.createElement('button');
    eListItemDeleteBtn.className = 'btn bg-transparent text-danger m-0 px-1 py-0 border-0 align-baseline position-absolute end-0 delete_btn';
    eListItemDeleteBtn.setAttribute('type', 'button');
    eListItemDeleteBtn.setAttribute('id', 'deleteBtn' + toDoList[toDoList.length - 1]);

    eListItemDeleteBtn.innerHTML ='<i class="fas fa-times-circle"></i>';

    eLabel.appendChild(eInput);
    eLabel.appendChild(listItem);
    eLabel.appendChild(eListItemDeleteBtn);

    toDoListContainer.appendChild(eLabel, toDoListContainer);
}
function removeListItem(e) {
    console.log('run remove list function');
    console.log(e);
}

/* /FUNCTIONS */

/* EVENTS */

document.addEventListener('DOMContentLoaded', function(){
    toDoList = toDoListArray;
    if (toDoList !== undefined || toDoList !== null ) {
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
            function(e,i){
                let AddToDoItemValue = eAddToDoItem.value;
                if ( AddToDoItemValue !== '') {
                    toDoList.push({"id": toDoList[toDoList.length - 1].id + 1 ,"item": AddToDoItemValue ,"status":false});
                addListItem(AddToDoItemValue, "false")
                console.log(toDoList);
                }
            }
        );
    }

    /* This adds padding to the toDoListApp based on the height of the toDoListAddItemContainer */
    toDoListAddItemContainerHeight = toDoListAddItemContainer.offsetHeight;
    toDoListApp.style.cssText = 'margin-bottom: ' +  toDoListAddItemContainerHeight + 'px;';
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
