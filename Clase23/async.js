// Función que simula un proceso asíncrono con Promesas
function simulateDatabaseRequest(userId) {
    return new Promise((resolve, reject) => {
        try {
            console.log(`Procesando solicitud para usuario ${userId}...`);
            
            // Simular tiempo de procesamiento (1-3 segundos)
            const processingTime = Math.random() * 2000 + 1000;
            
            setTimeout(() => {
                try {
                    // Simular una condición de éxito/error (70% éxito, 30% error)
                    const isSuccess = Math.random() > 0.3;
                    
                    if (isSuccess) {
                        // Datos simulados del usuario
                        const userData = {
                            id: userId,
                            name: `Usuario ${userId}`,
                            email: `user${userId}@example.com`,
                            registrationDate: new Date().toISOString().split('T')[0],
                            accountStatus: 'Activo',
                            lastLogin: new Date().toISOString()
                        };
                        
                        resolve({
                            status: 'success',
                            message: `Datos del usuario ${userId} obtenidos exitosamente`,
                            data: userData,
                            timestamp: new Date().toISOString()
                        });
                    } else {
                        reject({
                            status: 'error',
                            message: `Error al obtener datos del usuario ${userId}`,
                            errorCode: `ERR_${Math.floor(Math.random() * 1000)}`,
                            timestamp: new Date().toISOString(),
                            suggestion: 'Por favor, intenta nuevamente más tarde'
                        });
                    }
                } catch (error) {
                    reject({
                        status: 'error',
                        message: `Error interno al procesar usuario ${userId}`,
                        error: error.message
                    });
                } finally {
                    console.log(`Finalizó el procesamiento para usuario ${userId}`);
                }
            }, processingTime);
            
        } catch (error) {
            reject({
                status: 'error',
                message: `Error al iniciar la solicitud para usuario ${userId}`,
                error: error.message
            });
        } finally {
            console.log('Finalizó la creación de la promesa');
        }
    });
}

// Función adicional: simular petición a API externa
function simulateApiRequest(endpoint, timeout = 3000) {
    return new Promise((resolve, reject) => {
        try {
            console.log(`Haciendo petición a ${endpoint}...`);
            
            setTimeout(() => {
                try {
                    const isSuccess = Math.random() > 0.2; // 80% éxito
                    
                    if (isSuccess) {
                        resolve({
                            status: 'success',
                            endpoint: endpoint,
                            response: {
                                data: `Datos obtenidos de ${endpoint}`,
                                statusCode: 200,
                                timestamp: new Date().toISOString()
                            }
                        });
                    } else {
                        reject({
                            status: 'error',
                            endpoint: endpoint,
                            error: 'Error de conexión',
                            statusCode: 500,
                            timestamp: new Date().toISOString()
                        });
                    }
                } catch (error) {
                    reject({
                        status: 'error',
                        endpoint: endpoint,
                        error: error.message,
                        statusCode: 500,
                        timestamp: new Date().toISOString()
                    });
                } finally {
                    console.log(`Finalizó la petición a ${endpoint}`);
                }
            }, timeout);
            
        } catch (error) {
            reject({
                status: 'error',
                endpoint: endpoint,
                error: error.message,
                statusCode: 500,
                timestamp: new Date().toISOString()
            });
        } finally {
            console.log('Finalizó la creación de la promesa de API');
        }
    });
}

// Función para ejecutar el ejercicio 3
function ejecutarEjercicio3() {
    console.log('\n--- Ejercicio 3: Asincronía con Promesas ---');

    try {
        // Caso de éxito
        console.log('\n--- Caso: Solicitud exitosa ---');
        simulateDatabaseRequest(123)
            .then(response => {
                console.log('Éxito:', response.message);
                console.log('Datos:', response.data);
                console.log('Timestamp:', response.timestamp);
            })
            .catch(error => {
                console.log('Error:', error.message);
                console.log('Código:', error.errorCode);
                console.log('Sugerencia:', error.suggestion);
            })
            .finally(() => {
                console.log('Finalizó la ejecución de la solicitud exitosa');
            });

        // Caso de error (forzando error con timeout)
        console.log('\n--- Caso: Solicitud con error ---');
        const errorPromise = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    reject({
                        message: 'Timeout de conexión',
                        errorCode: 'ERR_TIMEOUT',
                        suggestion: 'Verifica tu conexión a internet'
                    });
                    console.log('Finalizó el timeout forzado');
                }, 100);
            } catch (error) {
                reject({
                    message: 'Error al crear promesa de error',
                    error: error.message
                });
            } finally {
                console.log('Finalizó la creación de la promesa de error');
            }
        });

        errorPromise
            .then(response => console.log('Éxito:', response))
            .catch(error => console.log('Error:', error.message))
            .finally(() => {
                console.log('Finalizó la ejecución de la promesa de error');
            });

        // Múltiples solicitudes
        console.log('\n--- Caso: Múltiples solicitudes ---');
        Promise.all([
            simulateDatabaseRequest(1),
            simulateDatabaseRequest(2),
            simulateDatabaseRequest(3)
        ])
        .then(results => {
            console.log('Todas las solicitudes completadas');
            results.forEach((result, index) => {
                console.log(`  Solicitud ${index + 1}: ${result.message}`);
            });
        })
        .catch(error => {
            console.log('Una o más solicitudes fallaron:', error.message);
        })
        .finally(() => {
            console.log('Finalizó la ejecución de solicitudes múltiples');
        });

        // Simulación de API
        console.log('\n--- Caso: Simulación de API ---');
        simulateApiRequest('/api/users', 2000)
            .then(response => {
                console.log('API respondió exitosamente');
                console.log('Respuesta:', response.response);
            })
            .catch(error => {
                console.log('Error en API:', error.error);
                console.log('Código de estado:', error.statusCode);
            })
            .finally(() => {
                console.log('Finalizó la ejecución de la simulación de API');
            });

        // Uso de async/await (demostración)
        console.log('\n--- Caso: Async/Await ---');
        
        // Función async con try-catch
        async function fetchUserData(userId) {
            try {
                console.log(`Buscando usuario ${userId}...`);
                const result = await simulateDatabaseRequest(userId);
                console.log(`Usuario ${userId} encontrado`);
                return result.data;
            } catch (error) {
                console.log(`Falló búsqueda de usuario ${userId}:`, error.message);
                return null;
            } finally {
                console.log(`Finalizó la búsqueda del usuario ${userId}`);
            }
        }

        // Ejecutar la función async
        fetchUserData(456).then(user => {
            if (user) {
                console.log('Usuario obtenido:', user.name);
            }
        });

        // Comparativa Promise vs Async/Await
        console.log('\n--- Comparativa: Promise vs Async/Await ---');
        
        // Con Promise
        console.log('Usando Promise:');
        simulateApiRequest('/api/status', 1500)
            .then(response => console.log('  Éxito:', response.response.statusCode))
            .catch(error => console.log('  Error:', error.statusCode))
            .finally(() => console.log('  Finalizó Promise'));

        // Con Async/Await
        console.log('Usando Async/Await:');
        (async () => {
            try {
                const response = await simulateApiRequest('/api/version', 1500);
                console.log('  Éxito:', response.response.statusCode);
            } catch (error) {
                console.log('  Error:', error.statusCode);
            } finally {
                console.log('  Finalizó Async/Await');
            }
        })();

    } catch (error) {
        console.error('Error en el ejercicio 3:', error);
    } finally {
        console.log('Finalizó la ejecución del ejercicio 3');
    }
}

ejecutarEjercicio3();