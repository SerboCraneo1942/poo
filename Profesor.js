import persona from '../js/Persona.js'
class Profesor extends Persona{
    constructor(idPersona,lastName,nombre,edad,genero,cumplirHorario,dictarClas){
        super(idPersona,lastName,nombre,edad,genero)
        this.cumplirHorario = cumplirHorario;
        this.dictarClase = dictarClase;
    }
    imprimirDatosProf(){
        console.log(`Cumplir Horarios----------> ${this.cumplirHorario}`);
        console.log(`Dictar Clase--------> ${this.dictarClase}`); 
}
}

export default Profesor