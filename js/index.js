var appName_txt, toDoListApp, instructionsContainer, appTitle, appName, toDoList, addToDoItem, deleteAllItems;

appName_txt = 'To Do List';

appIcon_txt = '<i class="fas fa-clipboard-list app-icon"></i>';

toDoListApp = document.querySelector('#toDoListApp');

instructionsContainer = document.createElement('div');

appTitle = document.querySelector('title');

appName = document.querySelector('h1.appName');

addToDoItem = document.querySelector('#addToDoItem');

deleteAllItems = document.querySelector('#deleteAllItems');



function startDateTime() {
    let d = new Date();
    let day = d.getDay();
    let dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let month = d.getMonth();
    let monthName = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let date = d.getDate();
    let year = d.getFullYear();
    // let time = d.getTime();

    let dateTimeContainer = document.querySelector('#dateTime');
    dateTimeContainer.innerHTML = '<strong>Today</strong>: ' + dayName[day] + ', ' + monthName[month] + ' ' + date + ', ' + year + ' ';
}

/* App title */

appTitle.innerHTML = appName_txt;

appName.innerHTML = appIcon_txt + ' ' + appName_txt;

setTimeout(function () {
    document.querySelector('.app-icon').classList.add('rotate-icon');
}, 3000);

/* /App title */

/* toDoList */

/* Change this to an empty array */

/* toDoList = [
    {   "id": 0,
        "item": "red",
        "status": false
    },
    {   "id": 1,
        "item": "yellow",
        "status": false
    },
    {   "id": 2,
        "item": "blue",
        "status": false
    },
    {   "id": 3,
        "item": "green",
        "status": false
    },
    {   "id": 4,
        "item": "purple",
        "status": false
    },
    {   "id": 5,
        "item": "orange",
        "status": true
    },
    {   "id": 6,
        "item": "white",
        "status": false
    }
]; */

toDoList = [];

function checkForEmptyList() {
    if(toDoList == '')  {
        /* Create an element */
        let toDoListContainer = document.querySelector('#toDoListContainer');

        instructionsContainer.id = 'instructionsContainer'
        instructionsContainer.className = 'mt-2 p-4 border border-secondary bg-white border-1 rounded-3 text-center shadow-sm fade';

        /* Create the text node */

        let instructionsTxt = document.createTextNode('To begin, type your item in the field below and then press the + button.');

        instructionsContainer.appendChild(instructionsTxt);

        /* Place one child note inside another */
        toDoListContainer.appendChild(instructionsContainer);
    }
};

/* .toDoListArray */

addToDoItem.addEventListener('click', addListItem);

deleteAllItems.addEventListener('click', deleteAllListItems);

/* this is not getting the toDoList.length */
function addListItem() {
    let newItem = document.querySelector('#newItem');
    if ( newItem.value !== '') {
        if(toDoList !== '')  {
            console.log('not empty');
            toDoList.push({"id": toDoList[0] ,"item": newItem.value ,"status":false});

        } else {
            console.log('empty');
            toDoList.push({"id": toDoList[toDoList.length - 1].id + 1 ,"item": newItem.value ,"status":false});
        }
        newItem.focus();
        newItem.value = '';
        showListItems();
    }
}

function showListItems(i) {
    let toDoListContainer = document.querySelector('#toDoListContainer');
    toDoListContainer.innerHTML = '';

    for (let i = 0; i < toDoList.length; i++ ) {
        // create label
        let listLabel = document.createElement('label');
        // label .list-group-item
        listLabel.className = 'list-group-item align-baseline position-relative fade show';
        // create input
        listCheckbox = document.createElement('input');
        // input .form-check-input .me-0
        listCheckbox.className = 'form-check-input m-0 me-2 align-text-bottom';
        // input [type='checkbox'] [value='']
        listCheckbox.setAttribute('type', 'checkbox');
        listCheckbox.addEventListener('change', function(e) {
            if (e.target.checked) {
                e.target.parentNode.classList.add('done');
                toDoList[i].status = true;
                this.setAttribute('CHECKED', '');
                this.setAttribute('value', true);
            }
            else {
                e.target.parentNode.classList.remove('done');
                toDoList[i].status = false;
                this.removeAttribute('CHECKED');
                this.setAttribute('value', false);
            }
        });
        listCheckbox.setAttribute('value', toDoList[i].status);
        // item coffee
        let listItemContainer = document.createElement('span');
        listItemContainer.classList.add('list-item');
        if (toDoList[i].status === true) {
            listCheckbox.setAttribute('CHECKED', '');
            listCheckbox.setAttribute('value', true);
            listItemContainer.classList.add('done');
        }
        let listItem = document.createTextNode(toDoList[i].item);

        // Delete Button
        let listItemDeleteBtn = document.createElement('button');
        listItemDeleteBtn.className = 'btn bg-transparent text-danger m-0 me-2 px-1 py-0 border-0 align-baseline position-absolute end-0 delete_btn';
        listItemDeleteBtn.setAttribute('type', 'button');

        listItemDeleteBtn.innerHTML ='<i class="fas fa-times-circle"></i>';
        listItemDeleteBtn.addEventListener('click', removeListItem);

        listLabel.appendChild(listCheckbox);
        listLabel.appendChild(listItemContainer);
        listItemContainer.appendChild(listItem);
        listLabel.appendChild(listItemDeleteBtn);

        toDoListContainer.appendChild(listLabel, toDoListContainer);
    };
} // /showListItems


function removeListItem(e) {
    toDoList = toDoList.filter(function(i) {
        if (i.item == e.target.parentNode.parentNode.querySelector('.list-item').innerText) {
            return false;
        }
        else {
            return true;
        }
    });
    newItem.focus();
    showListItems();
}

function deleteAllListItems(e) {
    let areYouSure = confirm('Are you sure you would like to delete all items in the To Do List?');
    if (areYouSure == true) {
        newItem.focus();
        toDoList = [];
        showListItems();
        instructionsContainer.innerText = '';
        checkForEmptyList();
        setTimeout(function () {
            instructionsContainer.classList.add('show');
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    checkForEmptyList();
    setTimeout(function () {
        instructionsContainer.classList.add('show');
    }, 500);
    startDateTime();
    newItem.focus();
});
