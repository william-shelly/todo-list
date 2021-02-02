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

            let newTask = document.createElement('label');

            newTask.id = 'task-label-' + task.id;
            newTask.dataset.id = task.id;

            newTask.className = 'list-group-item align-baseline position-relative fade show';

            let taskDone = document.createElement('input');

            taskDone.className = 'form-check-input m-0 me-2 align-baseline';

            taskDone.type = 'checkbox';
            taskDone.addEventListener('change', function(event) {
                task.toggleStatus();

                if (event.target.checked) {
                    event.target.nextSibling.classList.add('done');
                }
                else {
                    event.target.nextSibling.classList.remove('done');
                }
            });

            let taskText = document.createElement('span');
            taskText.classList.add('task-item','d-inline-block','fs-6','align-text-bottom');
            if (task.status == true) {
                taskText.classList.add('done');
                taskDone.checked = true;
            } else {
                taskText.classList.remove('done');
                taskDone.checked = false;
            }
            taskText.innerHTML = task.getInfo();

            let taskRemove = document.createElement('button');
            taskRemove.dataset.id = task.id;
            // taskRemove.innerText = 'Remove';
            taskRemove.innerHTML ='<i class="fas fa-times-circle"></i>';
            taskRemove.className = 'btn bg-transparent text-danger m-0 me-2 px-1 py-0 border-0 align-baseline position-absolute end-0 delete_btn transition scale_xl';
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
