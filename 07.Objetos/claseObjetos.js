// Estoy declarando un objeto literal
var perro = {
    nombre:"Firulais",
    color:"Negro",
    edad:7,
    macho: true
}

// Muestro como mandar a llamar la información del objeto literal Perro
console.log(`Mi perro se llama ${perro.nombre}, es ${perro.color} y tiene ${perro.edad} años`);

// Cambio los valores que tiene mi objeto literal por unos nuevos
perro.nombre = "Toby";
perro.color = "Cafe";
perro.patas = 4; // Estoy creando un nuevo atributo para el objeto Perro
console.log(`Mi perro se llama ${perro.nombre}, es ${perro.color} y tiene ${perro.patas} patas`);

// CLASES

class Perro {
    constructor(nombre,color,edad,macho){
        this.nombre = nombre,
        this.color = color,
        this.edad = edad,
        this.macho = macho
    }

    ladrar(){
        console.log(`${this.nombre}: Wofff Wofff`);
    }

}

// Creo a firulais a partir de la clase Perro
var firulais = new Perro("Firulais","Negro",8,false);
console.log(firulais);
firulais.ladrar();

var scooby = new Perro("Scooby doo","Cafe",10,true);
console.log(scooby);
scooby.ladrar();

const cancionero = [
    {cancion:"Llorando como un profesor", grupo:"La Univer", duracion:"4:43"}
    {cancion:"Saltando como un niño", grupo:"La Univer", duracion:"2:43"}
    {cancion:"Aprobando el semestre", grupo:"La Univer", duracion:"3:43"}
]
class Reproductor {
    constructor(listaDeCanciones){
        this.listaCanciones = listaDeCanciones;
        this.cancionActual = 0,
    }

    pintaEnPantalla(){
        var cancion = this.listaCanciones[cancionActual];
        var pintaCancion = document.getElementById('cancion');
        pintaCancion.innerHTML = elHtml;
    }

    pintarListaDeCanciones{}

    shuffle(){
        this.cancionActual= Math.floor(Math.random() * this.listaCanciones.length);
        this.pintaEnPantalla();
    }


}