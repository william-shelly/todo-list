import { TaskList } from "./taskList.js"

let taskList = new TaskList();

// taskList.addTask("Walk the Dog");

document.getElementById("add-task").addEventListener('click', function() {
    let newTask = document.getElementById('new-task');
    taskList.addTask(newTask.value);
});
