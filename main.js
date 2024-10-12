import Persona from "../js/Persona.js";

import Estudiante from "../js/Estudiante.js";

import Profesor from "../js/Profesor.js";


const persona1 = new Persona(102030,'Blanco','Andres',16,'Masculino')
persona1.imprimirDatos()

const persona2 = new Persona(104050,'MejÃa','Nikol',16,'Femenina')
persona2.imprimirDatos()

const estudiante1 = new Estudiante(202020, 'Muriel', 'Albeiro', 50, 'Masculino', 350000, 'Desarrollo')
estudiante1.imprimirDatos()
estudiante1.imprimirDatosEst()

const profesor1 = new Profesor(202020, 'Muriel', 'Albeiro', 50, 'Masculino', 350000, 'Desarrollo')
estudiante1.imprimirDatos()
estudiante1.imprimirDatosProf()