// SET VARIABLES
const listTable = document.getElementById("list-table");
const listTableBody = document.getElementById("list-table-body");
const taskModal = new bootstrap.Modal(document.getElementById("task"));
const todoForm = document.getElementById("todoForm");
const taskCount = document.createElement("p");

// Cargar las tareas desde localStorage al cargar la pagina
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("task")) || [];
    createRows(tasks);
    updateTaskCount(tasks);
};