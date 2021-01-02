//FUNCION PARA ASEGURAR QUE SEA NUMERO

function esNumero(_texto){
    let resultado;
    if(!isNaN(Number(_texto))&&Number(_texto) !=='') {
        resultado = true;
    } else{
        resultado = false;
        
    }

    return resultado;

}

function noSeEncuentra(_nombre){
    let existe;

    if(peliculas.length===0){
        existe= true;

    }else{

        for(i=0; i<peliculas.length; i++){
        
            if(peliculas[i].nombre===_nombre){
    
                existe = false;
                break;
    
            }else{
    
                existe= true
            }
        }
    }
    return existe;
}