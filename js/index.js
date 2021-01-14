// eXXX = HTML Element
// XXX_txt = string variable

let toDoListContainer, toDoListArray, toDoList, appName_txt, eAppTitle, eAppName, eAddToDoItem, eAddToDoItemBtn, eListItemDeleteButton, deleteBtns;

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

// toDoListArray.push({"item":"Drive Truck","status":true});


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
    eListItemDeleteButton = document.createElement('button');
    eListItemDeleteButton.className = 'btn bg-transparent text-danger m-0 px-1 py-0 border-0 align-baseline position-absolute end-0 deleteBtns';
    eListItemDeleteButton.setAttribute('type', 'button');
    eListItemDeleteButton.setAttribute('id', 'deleteBtn' + i);
    eListItemDeleteButton.innerHTML ='<i class="fas fa-times-circle"></i>';

    eLabel.appendChild(eInput);
    eLabel.appendChild(listItem);
    eLabel.appendChild(eListItemDeleteButton);
    

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

    deleteBtns = document.querySelectorAll('.deleteBtns');

    if (deleteBtns != null || deleteBtns === undefined) {
        if (deleteBtns.length > 0) {
            for (let i = 0; i < deleteBtns.length; i++) {
                deleteBtns[i].addEventListener(
                "click",
                    function(e){
                        this.parentNode.remove();
                    }
                );
            }
        }
    }

});

/* /EVENTS */
