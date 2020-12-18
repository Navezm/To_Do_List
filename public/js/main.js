// Déclaration éléments principaux
let body = document.body;
let divTask = document.getElementById("divTask");
let btnAdd = document.getElementById("btnAdd");
let inputAdd = document.getElementById("inputAdd");
let btnSort = document.getElementsByClassName("btnSort");
let deleteDiv = document.getElementById("deleteDiv");

// Déclaration élément création
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
let childI;
let inputChange;
let divDelete = [];

// // Event création de tâches
btnAdd.addEventListener("click", function(){
    // Div principale
    newTask = document.createElement("div");
    newTask.setAttribute("class", "bg-light");
    newTask.classList.add("py-2", "mb-2", "rounded", "d-flex", "align-items-center", "divTaskArray");

    // Titres tâches
    div1Task = document.createElement("div");
    div1Task.setAttribute("class", "d-flex");
    div1Task.classList.add("col-4", "align-items-center");
    span = document.createElement("input");
    span.setAttribute("disabled", "");
    span.setAttribute("class", "inputChange");
    span.classList.add("bg-transparent");
    span.value = inputAdd.value;
    span.style.border = "none";
    div1Task.appendChild(span);

    // Boutons tâches
    div2Task = document.createElement("div");
    div2Task.setAttribute("class", "text-right");
    div2Task.classList.add("col-8");
    for (let i = 0; i < 3; i++) {
        button = document.createElement("button");
        button.setAttribute("class", "btn");
        button.classList.add("mx-2");
        if(i == 0){
            button.classList.add("text-info", "btnCheck");
            logo = document.createElement("i");
            logo.setAttribute("class", "fas fa-check-circle");
            button.appendChild(logo);
        } else if(i == 1){
            button.classList.add("text-warning", "btnEdit");
            logo = document.createElement("i");
            logo.setAttribute("class", "fas fa-edit");
            logo.classList.add("arrayI");
            button.appendChild(logo);
        } else if(i == 2){
            button.classList.add("text-danger", "btnDelete");
            logo = document.createElement("i");
            logo.setAttribute("class", "fas fa-trash-alt");
            button.appendChild(logo);
        };
        div2Task.appendChild(button);
    };

    // Rajout dans la liste de tâches
    newTask.append(div1Task, div2Task);
    divTask.appendChild(newTask);

    // Stockage des boutons
    btnCheck = document.getElementsByClassName("btnCheck");
    btnEdit = document.getElementsByClassName("btnEdit"); 
    btnDelete = document.getElementsByClassName("btnDelete");
    childI = document.getElementsByClassName("arrayI");

    // // Event bouttons tâche
    // Event Check
    for (let i = 0; i < divTaskArray.length; i++) {
        btnCheck[i].addEventListener("click", function(){
            divTaskArray[i].classList.remove("bg-light");
            divTaskArray[i].classList.add("bg-success");
        });
    };

    // Event delete
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener("click", function(){
            divTaskArray[i].classList.remove("d-flex");
            divTaskArray[i].classList.add("d-none");
            divTaskArray[i].classList.remove("bg-light");
            divTaskArray[i].classList.remove("bg-success");
            divDelete.push(divTaskArray[i]);
        });
    };

    deleteDiv.addEventListener("click", function(){
        for (let i = 0; i < (divDelete.length + 1); i++) {
            divDelete[i].remove();
        };
    });

    // Event modify
       for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].addEventListener("click", function(){
            spanInput[i].removeAttribute("disabled");
            childI[i].classList.remove("fa-edit");
            childI[i].classList.add("fa-save");
        });
    };

    for (let i = 0; i < spanInput.length; i++) {
        spanInput[i].addEventListener("blur", function(){
            spanInput[i].setAttribute("disabled", "");
            childI[i].classList.remove("fa-save");
            childI[i].classList.add("fa-edit");
            
        });
    };

    // // Event tris
    for (let index = 0; index < btnSort.length; index++) {
        btnSort[index].addEventListener("click", function(){
            if(index == 0){
                for (let i = 0; i < divTaskArray.length; i++) {
                    if(divTaskArray[i].classList.contains("bg-success")){
                        divTaskArray[i].classList.add("d-none");
                        divTaskArray[i].classList.remove("d-flex");
                    } else if(divTaskArray[i].classList.contains("bg-light")){
                        divTaskArray[i].classList.add("d-flex");
                        divTaskArray[i].classList.remove("d-none");
                    };
                };
            } else if(index == 1){
                for (let i = 0; i < divTaskArray.length; i++) {
                    if(divTaskArray[i].classList.contains("bg-success")){
                        divTaskArray[i].classList.add("d-flex");
                        divTaskArray[i].classList.remove("d-none");
                    } else if(divTaskArray[i].classList.contains("bg-light")){
                        divTaskArray[i].classList.add("d-none");
                        divTaskArray[i].classList.remove("d-flex");
                    };
                };
            } else if(index == 2){
                for (let i = 0; i < divTaskArray.length; i++) {
                    if(divTaskArray[i].classList.contains("bg-success")){
                        divTaskArray[i].classList.add("d-flex");
                        divTaskArray[i].classList.remove("d-none");
                    } else if(divTaskArray[i].classList.contains("bg-light")){
                        divTaskArray[i].classList.add("d-flex");
                        divTaskArray[i].classList.remove("d-none");
                    };
                };
            };
        });
    };
});

// // Déclaration & stockage des éléments tâches
let divTaskArray = document.getElementsByClassName("divTaskArray");
let spanInput = document.getElementsByClassName("inputChange");