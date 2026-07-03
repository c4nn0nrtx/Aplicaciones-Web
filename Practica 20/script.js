const input = document.getElementById("taskInput");
const btnCrear = document.getElementById("createBtn");
const lista = document.getElementById("taskList");

function crearTarea(){

    const texto = input.value.trim();

    if(texto === ""){
        alert("Debes escribir una tarea.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${texto}</span>

        <div class="buttons">
            <button class="edit">Editar</button>
            <button class="delete">Eliminar</button>
        </div>
    `;

    lista.appendChild(li);

    input.value="";
    input.focus();

}

btnCrear.addEventListener("click", crearTarea);

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){
        crearTarea();
    }

});

lista.addEventListener("click",(event)=>{

    const elemento = event.target;

    const li = elemento.closest("li");

    if(!li) return;

    // Eliminar
    if(elemento.classList.contains("delete")){
        li.remove();
    }

    // Editar
    if(elemento.classList.contains("edit")){

        const span = li.querySelector("span");

        const nuevoTexto = prompt("Editar tarea:", span.textContent);

        if(nuevoTexto !== null && nuevoTexto.trim() !== ""){
            span.textContent = nuevoTexto.trim();
        }

    }

});