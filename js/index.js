// eXXX = HTML Element
// XXX_txt = string variable

let toDoListContainer, myListArray, myList, appName_txt, eAppTitle, eAppName, eAddToDoItem, eAddToDoItemBtn;

appName_txt = 'William\'s To Do List';

toDoListContainer = document.querySelector('#toDoList');

eAppTitle = document.querySelector('title');

eAppName = document.querySelector('h1.appName');

eAddToDoItem = document.querySelector('#addToDoItem_input_txt');
eAddToDoItemBtn = document.querySelector('#addToDoItem_btn');

eAppTitle.innerText = appName_txt;

eAppName.innerHTML = appName_txt;

myListArray = ['Fix Fence','Wash Car','Clean Interior','Get Groceries','Fly Kite'];

// myListArray = null;

/* LOCAL STORAGE NOTE */
/* This will add the files to Local Storage */
//localStorage.setItem('MyList', JSON.stringify(myListArray));
//myList = JSON.parse(localStorage.getItem('MyList'));
/* /LOCAL STORAGE NOTE */

myList = myListArray;

document.addEventListener('DOMContentLoaded', function(){
    if (myList === undefined || myList === null ) {
        console.log('empty');
    } else {
        for (let i = 0; i < myList.length; i++ ) {
            console.log(myList[i]);
            buildListItems(i);
        }
    }
});

/* toDoListContainer = ''; */
/* console.log(myList); */

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
    eInput.setAttribute("value", myList[i]);
    // item coffee
    listItem = document.createTextNode(myList[i]);
    eLabel.appendChild(eInput);
    eLabel.appendChild(listItem);

    toDoListContainer.appendChild(eLabel, toDoListContainer);
}
