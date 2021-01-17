var appName_txt, toDoListApp, appTitle, appName, toDoList, addToDoItem, deleteAllItems;

appName_txt = 'William\'s To Do List';


toDoListApp = document.querySelector('#toDoListApp');

appTitle = document.querySelector('title');

appName = document.querySelector('h1.appName');



addToDoItem = document.querySelector('#addToDoItem');

deleteAllItems = document.querySelector('#deleteAllItems');

/* App title */

appTitle.innerText = appName_txt;

appName.innerHTML = appName_txt;

/* /App title */

/* toDoList */

/* Change this to an empty array */

toDoList = [
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

// toDoList = [];

/* .toDoListArray */

addToDoItem.addEventListener('click', addListItem);

deleteAllItems.addEventListener('click', deleteAllListItems);

function addListItem() {
    let newTask = document.querySelector('#newTask');
    if ( newTask.value !== '') {
        console.log(newTask.value);
        toDoList.push({"id": toDoList[toDoList.length - 1].id + 1 ,"item": newTask.value ,"status":false});
        console.log(toDoList);
        newTask.focus();
        newTask.value = '';
        showListItems();
    }
}

function showListItems(i) {
    let toDoListContainer = document.querySelector('#toDoListContainer');
    toDoListContainer.innerHTML = '';

    for (let i = 0; i < toDoList.length; i++ ) {
        console.log(toDoList[i]);
        // create label
        let listLabel = document.createElement('label');
        // label .list-group-item
        listLabel.className = 'list-group-item align-baseline position-relative fade show';
        // create input
        listCheckbox = document.createElement('input');
        // input .form-check-input .me-0
        listCheckbox.className = 'form-check-input m-0 me-2 align-baseline';
        // input [type='checkbox'] [value='']
        listCheckbox.setAttribute('type', 'checkbox');
        listCheckbox.addEventListener('change', function(e) {
            if (e.target.checked) {
                e.target.parentNode.classList.add('done');
                // e.target.nextSibling.classList.add('done');
                console.log('statusChecker true');
                toDoList[i].status = true;
                this.setAttribute('CHECKED', '');
                this.setAttribute('value', true);
            }
            else {
                // e.target.nextSibling.classList.remove('done');
                e.target.parentNode.classList.remove('done');
                console.log('statusChecker false');
                toDoList[i].status = false;
                this.removeAttribute('CHECKED');
                this.setAttribute('value', false);
            }
            console.log(toDoList);
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
        listItemDeleteBtn.className = 'btn bg-transparent text-danger m-0 px-1 py-0 border-0 align-baseline position-absolute end-0 delete_btn';
        listItemDeleteBtn.setAttribute('type', 'button');
        // listItemDeleteBtn.setAttribute('id', 'deleteBtn' + toDoList[toDoList.length - 1]);

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
    showListItems();
}

function deleteAllListItems(e) {
    toDoList = [];
    showListItems();
}
