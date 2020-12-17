// Déclaration éléments principaux
let body = document.body;
let divTask = document.getElementById("divTask");
let btnAdd = document.getElementById("btnAdd");
let inputAdd = document.getElementById("inputAdd");
let btnAll = document.getElementById("btnAll");
let btnDo = document.getElementById("btnDo");
let btnFinish = document.getElementById("btnFinish");
let newTask;
let div1Task;
let div2Task;
let span;
let button;
let logo;

// Déclaration éléments divTask
let btnCheck;
let btnEdit;
let btnDelete;
let btnSave;
let inputChange;

// Event création de tâches
btnAdd.addEventListener("click", function(){
    newTask = document.createElement("div");
    newTask.setAttribute("class", "bg-light");
    newTask.classList.add("py-2", "mb-2", "rounded", "d-flex", "align-items-center");

    // Titre tâche
    div1Task = document.createElement("div");
    div1Task.setAttribute("class", "d-flex");
    div1Task.classList.add("col-4", "align-items-center");
    span = document.createElement("span");
    span.innerHTML = inputAdd.value;
    div1Task.appendChild(span);

    // Boutons tâche
    div2Task = document.createElement("div");
    div2Task.setAttribute("class", "text-right");
    div2Task.classList.add("col-8");
    for (let i = 0; i < 3; i++) {
        button = document.createElement("button");
        button.setAttribute("class", "btn");
        button.classList.add("mx-2");
        if(i == 0){
            button.classList.add("text-info");
            logo = document.createElement("i");
            logo.setAttribute("class", "fas fa-check-circle");
            button.appendChild(logo);
        } else if(i == 1){
            button.classList.add("text-warning");
            logo = document.createElement("i");
            logo.setAttribute("class", "fas fa-edit");
            button.appendChild(logo);
        } else if(i == 2){
            button.classList.add("text-danger");
            logo = document.createElement("i");
            logo.setAttribute("class", "fas fa-trash-alt");
            button.appendChild(logo);
        };
        div2Task.appendChild(button);
    };

    // Rajout dans la div
    newTask.append(div1Task, div2Task);
    divTask.appendChild(newTask);
});