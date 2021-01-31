import { TaskList } from "./taskList.js"

var appName_txt, toDoListApp, instructionsContainer, appTitle, appName, appIcon_txt, addTask, newTask, taskList, clearList;

appName_txt = 'To Do List';

appIcon_txt = '<i class="fas fa-clipboard-list app-icon"></i>'

toDoListApp = document.querySelector('#toDoListApp');

instructionsContainer = document.createElement('div');

appTitle = document.querySelector('title');

appName = document.querySelector('h1.appName');

addTask = document.getElementById("add-task");

newTask = document.getElementById('new-task');

clearList = document.getElementById("clear-list")

taskList = new TaskList();

addTask.addEventListener('click', function() {
    taskList.addTask(newTask.value);
    newTask.value = '';
    newTask.focus();
});

newTask.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        taskList.addTask(newTask.value);
        newTask.value = '';
        newTask.focus();
    }
});

clearList.addEventListener('click', function() {
    taskList.clearTasks();
});

function removeTask(event) {
    taskList.removeTask(event.target.dataset.id);
}

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

document.addEventListener('DOMContentLoaded', function(){
    startDateTime();
    newTask.focus();
});
