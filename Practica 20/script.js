const input = document.getElementById("taskInput");
const botonCrear = document.getElementById("createBtn");
const lista = document.getElementById("taskList");

let tareas = [];

// Cargar tareas al iniciar
window.onload = function(){

    const datos = localStorage.getItem("tareas");

    if(datos){
        tareas = JSON.parse(datos);
    }

    renderizar();
};

// Crear tarea
function crearTarea(){

    const texto = input.value.trim();

    if(texto === ""){
        alert("Escribe una tarea.");
        return;
    }

    const tarea = {
        id: Date.now(),
        titulo: texto,
        completada:false
    };

    tareas.push(tarea);

    guardar();

    renderizar();

    input.value="";
    input.focus();

}

botonCrear.addEventListener("click", crearTarea);

input.addEventListener("keydown",function(e){

    if(e.key==="Enter"){
        crearTarea();
    }

});

// Guardar LocalStorage
function guardar(){

    localStorage.setItem("tareas",JSON.stringify(tareas));

}

// Mostrar tareas
function renderizar(){

    lista.innerHTML="";

    tareas.forEach(function(tarea){

        const li=document.createElement("li");
        li.dataset.id=tarea.id;

        const span=document.createElement("span");
        span.textContent=tarea.titulo;

        if(tarea.completada){
            span.classList.add("completed");
        }

        const botones=document.createElement("div");
        botones.classList.add("buttons");

        const editar=document.createElement("button");
        editar.textContent="Editar";
        editar.classList.add("edit");

        const eliminar=document.createElement("button");
        eliminar.textContent="Eliminar";
        eliminar.classList.add("delete");

        botones.appendChild(editar);
        botones.appendChild(eliminar);

        li.appendChild(span);
        li.appendChild(botones);

        lista.appendChild(li);

    });

}

// Delegación de eventos
lista.addEventListener("click",function(e){

    const li=e.target.closest("li");

    if(!li) return;

    const id=Number(li.dataset.id);

    const tarea=tareas.find(t=>t.id===id);

    // Completar
    if(e.target.tagName==="SPAN"){

        e.target.classList.toggle("completed");

        tarea.completada=e.target.classList.contains("completed");

        guardar();

    }

    // Editar
    if(e.target.classList.contains("edit")){

        const nuevoTexto=prompt("Editar tarea:",tarea.titulo);

        if(nuevoTexto!==null && nuevoTexto.trim()!==""){

            tarea.titulo=nuevoTexto.trim();

            guardar();

            renderizar();

        }

    }

    // Eliminar
    if(e.target.classList.contains("delete")){

        tareas=tareas.filter(function(t){

            return t.id!==id;

        });

        guardar();

        li.parentNode.removeChild(li);

    }

});