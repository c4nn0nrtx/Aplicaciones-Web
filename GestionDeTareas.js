// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  // Recorrer el arreglo de tareas
  //también se puede usar forEach en lugar de for
  for (let i = 0; i < lista.length; i++) {
    const tarea = lista[i];
    // Determinar el estado de la tarea
    const estado = tarea.completada ? "Completada" : "Pendiente";
    // Mostrar en consola el nombre y estado de la tarea
    console.log(`Tarea: ${tarea.nombre}, Estado: ${estado}`);
  }
}

/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  // Usar filter para obtener solo las tareas completadas
  return lista.filter(tarea => tarea.completada === true);
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  // Usar filter para obtener solo las tareas pendientes
  return lista.filter(tarea => tarea.completada === false);
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  // Usar map para obtener solo los nombres de las tareas
  return lista.map(tarea => tarea.nombre);
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  // Retornar la longitud del arreglo de tareas
  return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    //Llamar a la función mostrarTareas con el arreglo de tareas del sistema
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    // Obtener las tareas completadas usando la función obtenerCompletadas
    const completadas = obtenerCompletadas(this.tareas);
    // Mostrar las tareas completadas usando la función mostrarTareas
    mostrarTareas(completadas);
  },

  mostrarPendientes: function() {
    // Obtener las tareas pendientes usando la función obtenerPendientes
    const pendientes = obtenerPendientes(this.tareas);
    // Mostrar las tareas pendientes usando la función mostrarTareas
    mostrarTareas(pendientes);
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

// Verificar si el arreglo de tareas está vacío
if (tareas.length === 0) {
  console.log("No hay tareas");
} else {
  // Verificar si todas las tareas están completadas usando every
  const todasCompletadas = tareas.every(tarea => tarea.completada === true);
  if (todasCompletadas) {
    // Mostrar mensaje si todas las tareas están completadas
    console.log("Todas las tareas completadas");
  }
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  case 1:
    // Llamar al método mostrarTareas del objeto sistema
    sistema.mostrarTareas();
    break;

  case 2:
    // Llamar al método mostrarCompletadas del objeto sistema
    sistema.mostrarCompletadas();
    break;

  case 3:
    // Llamar al método mostrarPendientes del objeto sistema
    sistema.mostrarPendientes();
    break;

  default:
    // Mostrar mensaje de opción inválida
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("\n=== PRUEBAS DE FUNCIONES ===");

// Prueba de mostrarTareas
console.log("\n1. Mostrar todas las tareas:");
mostrarTareas(tareas);

// Prueba de obtenerCompletadas
console.log("\n2. Tareas completadas:");
const completadas = obtenerCompletadas(tareas);
console.log(completadas);

// Prueba de obtenerPendientes
console.log("\n3. Tareas pendientes:");
const pendientes = obtenerPendientes(tareas);
console.log(pendientes);

// Prueba de obtenerNombres
console.log("\n4. Nombres de todas las tareas:");
const nombres = obtenerNombres(tareas);
console.log(nombres);

// Prueba de contarTareas
console.log("\n5. Total de tareas:");
const total = contarTareas(tareas);
console.log(`Total: ${total} tareas`);

// Prueba del objeto sistema
console.log("\n=== PRUEBAS DEL OBJETO SISTEMA ===");
console.log("\n6. Sistema - Mostrar todas:");
sistema.mostrarTareas();

console.log("\n7. Sistema - Mostrar completadas:");
sistema.mostrarCompletadas();

console.log("\n8. Sistema - Mostrar pendientes:");
sistema.mostrarPendientes();

