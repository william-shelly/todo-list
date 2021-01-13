// eXXX = HTML Element
// XXX_txt = string variable

let toDoListContainer, myListArray, myList, appName_txt, eAppTitle, eAppName, eAddToDoItem, eAddToDoItemBtn, checkedArray;

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

myListArray = [
    {   "item": "ADD DELETE ICON!",
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

// myListArray.push({"item":"Drive Truck","status":true});


/* NOTE: THIS IS TO TEST IF myListArray is NULL */
// myListArray = null;
/* /NOTE: THIS IS TO TEST IF myListArray is NULL */

/* NOTE: LOCAL STORAGE NOTE */
/* This will add the files to Local Storage */
//localStorage.setItem('MyList', JSON.stringify(myListArray));
//myList = JSON.parse(localStorage.getItem('MyList'));
/* /NOTE: LOCAL STORAGE NOTE */

/* FUNCTIONS */

function buildListItems(i) {
    let eLabel, eInput, listItem;
    // create label
    eLabel = document.createElement('label');
    // label .list-group-item
    eLabel.className = 'list-group-item';
    // create input
    eInput = document.createElement('input');
    // input .form-check-input .me-0
    eInput.className = 'form-check-input me-2';
    // input [type='checkbox'] [value='']
    eInput.setAttribute("type", "checkbox");
    eInput.setAttribute("value", myList[i].status);
    if (myList[i].status === true) {
        eInput.setAttribute("CHECKED", "");
    }
    // item coffee
    listItem = document.createTextNode(myList[i].item);
    eLabel.appendChild(eInput);
    eLabel.appendChild(listItem);

    toDoListContainer.appendChild(eLabel, toDoListContainer);
}

/* /FUNCTIONS */

/* EVENTS */

document.addEventListener('DOMContentLoaded', function(){
    myList = myListArray;
    if (myList === undefined || myList === null ) {
        console.log('empty');
    } else {
        for (let i = 0; i < myList.length; i++ ) {
            console.log(myList[i]);
            buildListItems(i);
        }
    }
});

/* /EVENTS */
