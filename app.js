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

// Evento al enviar el formulario
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;

    if (!title || !text || !date || !hour) {
        Swal.fire({
            text: "Por favor, completa todos los campos antes de agregar la tarea.",
            icon: "warning",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK",
        });
        return;
    }

    if (!todoForm.checkValidity()) {
        event.stopPropagation();
        todoForm.classList.add("was-validated");
    } else {
        const data = new FormData(this);
        addTask(data);
        todoForm.classList.remove("was-validated");
    }
});
