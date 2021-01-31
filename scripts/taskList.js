import { Task } from "./task.js"

export class TaskList {
    tasks = [];

    constructor() {

    }

    addTask(name) {
        let task = new Task(this.tasks.length, name);
        this.tasks.push(task);

        console.log(this.tasks);
        console.log('Added: ' + task.getInfo());

        this.listTasks();
    }

    removeTask(task) {
        console.log('Can\'t Remove Tasks yet');
    }

    clearTasks() {
        this.tasks = [];
        this.listTasks();
        console.log('Cleared the list!');
    }

    listTasks() {
        let taskList = document.getElementById('task-list');

        taskList.innerHTML = '';

        this.tasks.forEach(function(task) {

            let newTask = document.createElement('li');

            let taskDone = document.createElement('input');

            taskDone.type = 'checkbox';
            taskDone.addEventListener('change', function(event) {
                task.toggleStatus();

                if (event.target.checked) {
                    // task.status = true;
                    event.target.nextSibling.classList.add('done');
                }
                else {
                    // task.status = false;
                    event.target.nextSibling.classList.remove('done');
                }
            });

            let taskText = document.createElement('span');
            taskText.classList.add('task-item');
            if (task.status == true) {
                taskText.classList.add('done');
                taskDone.checked = true;
            } else {
                taskText.classList.remove('done');
                taskDone.checked = false;
            }
            taskText.innerText = task.getInfo();

            let taskRemove = document.createElement('button');
            taskRemove.dataset.id = task.id;
            taskRemove.innerText = 'Remove';
            taskRemove.classList.add('btn');
            taskRemove.classList.add('btn-danger');
            taskRemove.addEventListener('click', function(event) {
                console.log('this isn\'t working yet!');
            });

            newTask.appendChild(taskDone);
            newTask.appendChild(taskText);
            newTask.appendChild(taskRemove);

            taskList.appendChild(newTask);

        });
    }
}
