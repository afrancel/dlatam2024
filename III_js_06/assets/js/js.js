import tasks from "./data.js";

const inputTask = document.querySelector('#formtask');
const btnAddTask = document.querySelector('#formBtnAddTask');
const tableTask = document.querySelector("#tableTask");
const totalTasksElement = document.querySelector('#totalTasks');
const selectedTasksElement = document.querySelector('#selectedTasks');

//boton enviar task
btnAddTask.addEventListener("click", (event) => {
    event.preventDefault();

    const newTask = { id: Date.now(), Tarea: inputTask.value, selected: false };
    tasks.push(newTask);
    inputTask.value = "";
    updateList();
});

//actualizar lista tareas
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
//borrar tareas
window.deleteTask = function(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        updateList();
    }
};
//verificar selects
window.toggleSelect = function(id, selected) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.selected = selected;
        updateCounts();
    }
};
//actualizar numeros
function updateCounts() {
    const totalTasks = tasks.length;
    const selectedTasks = tasks.filter(task => task.selected).length;

    totalTasksElement.textContent = totalTasks;
    selectedTasksElement.textContent = selectedTasks;
}

updateList();