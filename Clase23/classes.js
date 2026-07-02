// Clase Base
class Person {
    // Constructor con parámetros por defecto
    constructor(name = 'Anónimo', age = 0, email = 'no@email.com') {
        try {
            this.name = name;
            this.age = age;
            this.email = email;
            this._id = this.generateId();
            console.log(`Persona creada: ${this.name}`);
        } catch (error) {
            console.error('Error al crear persona:', error);
            // Valores por defecto en caso de error
            this.name = 'Anónimo';
            this.age = 0;
            this.email = 'no@email.com';
            this._id = this.generateId();
        } finally {
            console.log('Finalizó la creación de la persona');
        }
    }

    // Método público
    getInfo() {
        try {
            return `Nombre: ${this.name}, Edad: ${this.age}, Email: ${this.email}`;
        } catch (error) {
            console.error('Error al obtener información:', error);
            return 'Error al obtener información de la persona';
        } finally {
            console.log('Finalizó la obtención de información');
        }
    }

    // Método público que usa método privado
    getFullInfo() {
        try {
            return `${this.getInfo()} | ID: ${this.#getSecureId()}`;
        } catch (error) {
            console.error('Error al obtener información completa:', error);
            return this.getInfo();
        } finally {
            console.log('Finalizó la obtención de información completa');
        }
    }

    // Método privado (usando #)
    #getSecureId() {
        return `#${this._id}${this.name.substring(0, 2).toUpperCase()}`;
    }

    // Método privado (simulación con guión bajo)
    generateId() {
        return Math.floor(Math.random() * 1000000);
    }

    // Método público para actualizar email
    updateEmail(newEmail) {
        try {
            if (this.#validateEmail(newEmail)) {
                this.email = newEmail;
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error al actualizar email:', error);
            return false;
        } finally {
            console.log('Finalizó la actualización del email');
        }
    }

    // Método privado para validar email
    #validateEmail(email) {
        return email.includes('@') && email.includes('.');
    }
}

// Clase Hija - Estudiante
class Student extends Person {
    constructor(name, age, email, career = 'No especificada', semester = 1) {
        try {
            super(name, age, email);
            this.career = career;
            this.semester = semester;
            this.courses = [];
            console.log(`Estudiante creado: ${this.name}`);
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            this.career = 'No especificada';
            this.semester = 1;
            this.courses = [];
        } finally {
            console.log('Finalizó la creación del estudiante');
        }
    }

    // Método exclusivo de la clase hija
    enrollCourse(courseName) {
        try {
            if (!this.courses.includes(courseName)) {
                this.courses.push(courseName);
                return `¡Inscrito en ${courseName}!`;
            }
            return `Ya estás inscrito en ${courseName}`;
        } catch (error) {
            console.error('Error al inscribir curso:', error);
            return 'Error al inscribir curso';
        } finally {
            console.log('Finalizó la inscripción del curso');
        }
    }

    // Método exclusivo de la clase hija
    getAcademicInfo() {
        try {
            return `Carrera: ${this.career}, Semestre: ${this.semester}, Cursos: ${this.courses.length > 0 ? this.courses.join(', ') : 'Ninguno'}`;
        } catch (error) {
            console.error('Error al obtener información académica:', error);
            return 'Error al obtener información académica';
        } finally {
            console.log('Finalizó la obtención de información académica');
        }
    }

    // Sobrescribir método de la clase base
    getInfo() {
        try {
            return `${super.getInfo()} | Carrera: ${this.career}`;
        } catch (error) {
            console.error('Error al obtener información del estudiante:', error);
            return 'Error al obtener información del estudiante';
        } finally {
            console.log('Finalizó la obtención de información del estudiante');
        }
    }

    // Método exclusivo para avanzar de semestre
    advanceSemester() {
        try {
            this.semester++;
            return `¡Avanzaste al semestre ${this.semester}!`;
        } catch (error) {
            console.error('Error al avanzar semestre:', error);
            return 'Error al avanzar semestre';
        } finally {
            console.log('Finalizó el avance del semestre');
        }
    }
}

// Clase Hija - Profesor
class Teacher extends Person {
    constructor(name, age, email, department = 'No especificado', salary = 0) {
        try {
            super(name, age, email);
            this.department = department;
            this.salary = salary;
            this.classes = [];
            console.log(`Profesor creado: ${this.name}`);
        } catch (error) {
            console.error('Error al crear profesor:', error);
            this.department = 'No especificado';
            this.salary = 0;
            this.classes = [];
        } finally {
            console.log('Finalizó la creación del profesor');
        }
    }

    // Método exclusivo de la clase hija
    assignClass(className) {
        try {
            this.classes.push(className);
            return `Clase ${className} asignada a ${this.name}`;
        } catch (error) {
            console.error('Error al asignar clase:', error);
            return 'Error al asignar clase';
        } finally {
            console.log('Finalizó la asignación de clase');
        }
    }

    // Método exclusivo de la clase hija
    getProfessionalInfo() {
        try {
            return `Departamento: ${this.department}, Salario: $${this.salary}, Clases: ${this.classes.join(', ')}`;
        } catch (error) {
            console.error('Error al obtener información profesional:', error);
            return 'Error al obtener información profesional';
        } finally {
            console.log('Finalizó la obtención de información profesional');
        }
    }

    // Método exclusivo para calcular salario anual
    getAnnualSalary() {
        try {
            return this.salary * 12;
        } catch (error) {
            console.error('Error al calcular salario anual:', error);
            return 0;
        } finally {
            console.log('Finalizó el cálculo del salario anual');
        }
    }
}

// Función para ejecutar el ejercicio 2
function ejecutarEjercicio2() {
    console.log('\n--- Ejercicio 2: Clases, Objetos y Herencia ---');

    try {
        // Escenario 1: Creando objetos con constructor vacío
        console.log('\n--- Escenario 1: Constructores vacíos ---');
        
        const personVacio = new Person();
        console.log('Persona vacía:', personVacio.getInfo());
        console.log('Info completa:', personVacio.getFullInfo());

        const studentVacio = new Student();
        console.log('Estudiante vacío:', studentVacio.getInfo());
        console.log('Info académica:', studentVacio.getAcademicInfo());

        const teacherVacio = new Teacher();
        console.log('Profesor vacío:', teacherVacio.getInfo());
        console.log('Info profesional:', teacherVacio.getProfessionalInfo());

        // Escenario 2: Creando objetos con parámetros
        console.log('\n--- Escenario 2: Constructores con parámetros ---');
        
        const person = new Person('Juan Pérez', 30, 'juan@mail.com');
        console.log('Persona:', person.getInfo());
        person.updateEmail('juan.perez@mail.com');
        console.log('Email actualizado:', person.getInfo());

        const student = new Student('María González', 22, 'maria@estudiante.com', 'Ingeniería Informática', 5);
        console.log('Estudiante:', student.getInfo());
        console.log('Info académica:', student.getAcademicInfo());
        student.enrollCourse('Algoritmos');
        student.enrollCourse('Bases de Datos');
        console.log('Después de inscripción:', student.getAcademicInfo());
        console.log(student.advanceSemester());
        console.log(student.getAcademicInfo());

        const teacher = new Teacher('Dr. Carlos Rodríguez', 45, 'carlos@profesor.com', 'Matemáticas', 5000);
        console.log('Profesor:', teacher.getInfo());
        console.log('Info profesional:', teacher.getProfessionalInfo());
        teacher.assignClass('Cálculo I');
        teacher.assignClass('Álgebra Lineal');
        console.log('Después de asignar clases:', teacher.getProfessionalInfo());
        console.log(`Salario anual: $${teacher.getAnnualSalary()}`);

        // Probando métodos de clase base
        console.log('\n--- Probando métodos de clase base ---');
        console.log('Validar email:', person.updateEmail('email_invalido') ? 'Actualizado' : 'Email inválido');
        console.log('ID seguro (privado):', person.getFullInfo());

    } catch (error) {
        console.error('Error en el ejercicio 2:', error);
    } finally {
        console.log('Finalizó la ejecución del ejercicio 2');
    }
}

ejecutarEjercicio2();