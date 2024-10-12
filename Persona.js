class Persona{
    constructor(idPersona,lastName,nombre,edad,genero){
        this.idPersona = idPersona;
        this.apellido  = lastName;
        this.nombre    = nombre;
        this.edad      = edad;
        this.genero    = genero
    }
    //crear metodos
    imprimirDatos(){
        console.log("-------------------------------");
        console.log("       DATOS DE LA PERSONA");
        console.log("-------------------------------");
        console.log(`IdenticaciÃ³n--> ${this.idPersona}`);
        console.log(`Apellidos-----> ${this.apellido}`);
        console.log(`Nombres-------> ${this.nombre}`);
        console.log(`Edad----------> ${this.edad}`);
        console.log(`Genero--------> ${this.genero}`);        
    }
}

export default Persona