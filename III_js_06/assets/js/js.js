import tasks from "./data.js"; // Asegúrate de que la ruta y extensión sean correctas

const inputTask = document.querySelector('#formtask');
const btnAddTask = document.querySelector('#formBtnAddTask');
const tableTask = document.querySelector("#tableTask");
const totalTasksElement = document.querySelector('#totalTasks');
const selectedTasksElement = document.querySelector('#selectedTasks');

btnAddTask.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    const newTask = { id: Date.now(), Tarea: inputTask.value, selected: false };
    tasks.push(newTask);
    inputTask.value = ""; // Limpia el campo de entrada
    updateList();
});

function updateList() {
    let listTask = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">¿Checked?</th>
                    <th scope="col">¿Delete?</th>                                        
                </tr>
            </thead>
            <tbody>
    `;

    for (let task of tasks) {
        listTask += `
            <tr>
                <th scope="row">${task.id}</th>
                <td>${task.Tarea}</td>
                <td><input type="checkbox" ${task.selected ? "checked" : ""} onchange="toggleSelect(${task.id}, this.checked)"></td>
                <td><button class="btn btn-danger" onclick="deleteTask(${task.id})">Borrar</button></td>                                        
            </tr>
        `;
    }

    listTask += `
            </tbody>
        </table>
    `;

    tableTask.innerHTML = listTask;
    updateCounts();
}

window.deleteTask = function(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        updateList();
    }
};

window.toggleSelect = function(id, selected) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.selected = selected;
        updateCounts();
    }
};

function updateCounts() {
    const totalTasks = tasks.length;
    const selectedTasks = tasks.filter(task => task.selected).length;

    totalTasksElement.textContent = totalTasks;
    selectedTasksElement.textContent = selectedTasks;
}

updateList();