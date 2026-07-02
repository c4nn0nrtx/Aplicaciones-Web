// Importar funciones del módulo
import { generateGreeting, getCurrentTimeGreeting } from './greet.js';
import simpleGreeting from './greet.js';

// Función para ejecutar el ejercicio 1
function ejecutarEjercicio1() {
    console.log('--- Ejercicio 1: Módulos ---');
    
    try {
        console.log(generateGreeting('Brandon'));
        console.log(generateGreeting(''));
        console.log(generateGreeting());
        console.log(`Saludo según hora: ${getCurrentTimeGreeting()}`);
        console.log(simpleGreeting());
    } catch (error) {
        console.error('Error en el ejercicio 1:', error);
    } finally {
        console.log('Finalizó la ejecución del ejercicio 1');
    }
}

ejecutarEjercicio1();