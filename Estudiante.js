import persona from '../js/Persona.js'
class Estudiante extends Persona{
    constructor(idPersona,lastName,nombre,edad,genero,vlrMatricula,programa){
        super(idPersona,lastName,nombre,edad,genero)
        this.vlrMatricula = vlrMatricula;
        this.programa = programa;
    }
    imprimirDatosEst(){
        console.log(`Valor Semestre----------> ${this.vlrMatricula}`);
        console.log(`Genero--------> ${this.programa}`); 
}
}

export default Estudiante