// Función para generar mensaje de saludo
export function generateGreeting(name = 'Usuario') {
    try {
        if (!name || name.trim() === '') {
            throw 'Error: El nombre no puede estar vacío';
        }
        return `Hola, ${name}! Bienvenido a mi aplicación.`;
    } catch (error) {
        console.error('Ocurrió un error en el saludo:', error);
        return 'Hola, visitante! Bienvenido a mi aplicación.';
    } finally {
        console.log('Finalizó la generación del saludo');
    }
}

// Función para saludo según hora
export function getCurrentTimeGreeting() {
    try {
        const hour = new Date().getHours();
        let timeGreeting;
        
        if (hour < 12) timeGreeting = 'Buenos días';
        else if (hour < 19) timeGreeting = 'Buenas tardes';
        else timeGreeting = 'Buenas noches';
        
        return timeGreeting;
    } catch (error) {
        console.error('Error al obtener saludo por hora:', error);
        return 'Saludo';
    } finally {
        console.log('Finalizó la obtención del saludo por hora');
    }
}

// Export por defecto
export default function simpleGreeting() {
    return 'Hola, mundo!';
}