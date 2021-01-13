let toDoListContainer, myListArray, myList;

toDoListContainer = document.querySelector('#toDoList');

myListArray = ['Fix Fence','Wash Car','Clean Interior','Get Groceries','Fly Kite'];

// myListArray = null;

localStorage.setItem('MyList', JSON.stringify(myListArray));

myList = JSON.parse(localStorage.getItem('MyList'));

if (myList === undefined || myList === null ) {
    console.log('empty');
} else {
    for (let i = 0; i < myList.length; i++ ) {
        // console.log(myList[i]);
        buildListItems(i);
    }
}

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
