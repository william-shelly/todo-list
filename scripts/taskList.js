import { Task } from "./task.js"

export class TaskList {
    tasks = [];

    constructor() {

    }

    addTask(name) {
        this.tasks.push(new Task(this.tasks.length,name));
        console.log(this.tasks);

        this.listTasks();
    }

    removeTask(task) {
        console.log('Can\'t Remove Tasks yet');
    }

    listTasks() {
        let taskList = document.getElementById('task-list');

        taskList.innerHTML = '';

        this.tasks.forEach(function(task) {

            let newTask = document.createElement('li');

            let taskDone = document.createElement('input');
				taskDone.type = 'checkbox';
				taskDone.addEventListener('change', function(event) {
					if (event.target.checked) {
						task.status = true;
						event.target.nextSibling.classList.add('done');
					}
					else {
						task.status = false;
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
				taskText.innerText = task.name + " created at: " + task.toPrettyDate();

				let taskRemove = document.createElement('button');
				taskRemove.dataset.id = task.id;
				taskRemove.innerText = 'Remove';
				taskRemove.classList.add('btn');
				taskRemove.classList.add('btn-danger');
				taskRemove.addEventListener('click', removeTask);

				newTask.appendChild(taskDone);
				newTask.appendChild(taskText);
				newTask.appendChild(taskRemove);

				taskList.appendChild(newTask);

			});
    }
}
