
//EJERCICIO1------------------------------------------------------------------------------------------------

document.getElementById('btnIngresarEj1').addEventListener('click', btnIngresarEj1Handler);
document.getElementById('btnTablaEj1').addEventListener('click', btnTablaEj1Handler);
document.getElementById('btnMayoresEj1').addEventListener('click', btnMayoresEj1Handler)
function btnIngresarEj1Handler() {

    let nombre = document.getElementById('txtNombreEj1').value;
    let edad = Number(document.getElementById('txtEdadEj1').value);
    let nacionalidad = document.getElementById('txtNacionalidadEj1').value;

    let personaNueva = new Persona(nombre, edad, nacionalidad);

    personas.push(personaNueva);
}

function btnTablaEj1Handler() {

    let htmlTbody = '';

    for (let i = 0; i < personas.length; i++) {

        let p = personas[i];
        htmlTbody += `<tr><td>${p.nombre}</td><td>${p.edad}</td><td>${p.nacionalidad}</td></tr>`
    }
    document.querySelector('#tblEj1 tbody').innerHTML = htmlTbody;
}

function btnMayoresEj1Handler() {

    let htmlTbody = '';

    for (let i = 0; i < personas.length; i++) {

        let p = personas[i];
        if (p.edad > 18) {

            htmlTbody += `<tr><td>${p.nombre}</td><td>${p.edad}</td><td>${p.nacionalidad}</td></tr>`
        }
    }
    document.querySelector('#tblEj1 tbody').innerHTML = htmlTbody;
}

//EJERCICIO 2-------------------------------------------------------------------------------------------------------

document.getElementById('btnAgregarEj2').addEventListener('click', btnAgregarEj2Handler);
document.getElementById('btnFiltrarEj2').addEventListener('click', btnFiltrarEj2Handler);
document.getElementById('btnBuscadorEj2').addEventListener('click', btnBuscadorEj2Handler);

function btnAgregarEj2Handler() {

    let nombre = document.getElementById('txtNombreEj2').value;
    let ano = document.getElementById('txtAnoEj2').value;
    let genero = document.getElementById('slcGeneroEj2').value;
    let votantes = Number(document.getElementById('txtVotantesEj2').value);
    let puntos = Number(document.getElementById('txtPuntajeEj2').value);

    if (esNumero(ano) && noSeEncuentra(nombre)) {

        let peliculaNueva = new Pelicula(nombre, Number(ano), genero, votantes, puntos);
        peliculas.push(peliculaNueva);
        document.getElementById('msgEj2').innerText = "La película fue ingresada con éxito"
    } else {
        document.getElementById('msgEj2').innerText = "Error al registrar la pelicula, el año debe ser en numeros o la pelicula ya se encuentra registrada"
    }
}

function btnFiltrarEj2Handler() {
    let htmlTablaPelicula = '';

    for (let i = 0; i < peliculas.length; i++) {
        let peli = peliculas[i]

        if (peli.promedio >= 4) {
            htmlTablaPelicula += `<tr><td>${peli.nombre}</td><td>${peli.ano}</td><td>${peli.genero}</td>
                                <td>${peli.votantes}</td><td>${peli.puntos}</td><td>${peli.promedio}</td></tr>`
        }
    }
    document.querySelector('#tblEj2 tbody').innerHTML = htmlTablaPelicula;
}

function btnBuscadorEj2Handler() {

    let peliculaBuscada = document.getElementById('txtBuscadorEj2').value;

    for (let i = 0; i < peliculas.length; i++) {
        let peliculaEncontrada = peliculas[i];

        if (peliculaEncontrada.nombre === peliculaBuscada) {

            document.getElementById('msgBuscadorEj2').innerHTML = `Pelicula encontrada, Titulo:${peliculaEncontrada.nombre}, 
            año de estreno: ${peliculaEncontrada.ano}, genero: ${peliculaEncontrada.genero},
            cantidad de votos: ${peliculaEncontrada.votantes}, puntaje total:${peliculaEncontrada.puntos}
            y tiene un promedio de ${peliculaEncontrada.promedio}.`;
            break;
        } else {
            document.getElementById('msgBuscadorEj2').innerText = 'La pelicula buscada no se encuentra en el registro';
        }
    }
}

//EJERCICIO 3-----------------------------------------------------------------------------
document.getElementById('btnVenderEj3').addEventListener('click', btnVenderEj3Handler);


function btnVenderEj3Handler() {

    let tipo = document.getElementById('txtTipoEj3').value;
    let cantidad = document.getElementById('txtCantidadEj3').value;

    if (esNumero(tipo) && esNumero(cantidad) && tipo > 0 && tipo < arrayGuitarras.length) {


        let guitarra = arrayGuitarras[Number(tipo) - 1];


        let nuevaVenta = new Venta(guitarra, Number(cantidad))
        arrayVentas.push(nuevaVenta);
        document.getElementById('msgEj3').innerText = 'Venta registrada con exito';


    } else {
        document.getElementById('msgEj3').innerText = 'El tipo de guitarra es incorrecto, verifique';





        document.getElementById('msgEj3').innerText = 'Los campos solicitados deben contener numeros';
    }

}




