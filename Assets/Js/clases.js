//EJERCICIO 1-----------------------------------------------------

class Persona {
    nombre;
    edad;
    nacionalidad;

    constructor (pNombre, pEdad, pNacionalidad) {
        this.nombre= pNombre;
        this.edad= pEdad;
        this.nacionalidad= pNacionalidad;
    }
}

//EJERCICIO 2------------------------------------------------------

class Pelicula {
    nombre;
    ano;
    genero;
    votantes;
    puntos;
    promedio;

    constructor (pNombre, pAno, pGenero, pVotantes, pPuntos,) {
        this.nombre = pNombre;
        this.ano = pAno;
        this.genero = pGenero;
        this.votantes = pVotantes;
        this.puntos = pPuntos;
        this.promedio = Number(pPuntos/pVotantes);
    }
}

//EJERCICIO 3-----------------------------------------------------

class Guitarra {
    tipo;
    nombre;
    precio;

    constructor (pTipo, pNombre, pPrecio){
        this.tipo= pTipo;
        this.nombre= pNombre;
        this.precio= pPrecio;
    }
}

class Venta {

    guitarra;
    cantidad;

    constructor (pGuitarra, pCantidad){
        this.guitarra = pGuitarra;
        this.cantidad= pCantidad;
 
    }

    obtenerTotalVentasGuitarra(){
        return this.cantidad*this.guitarra.precio;
    }
}