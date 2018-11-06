function validacion() {

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var mail = document.getElementById('email').value;
    
    var comentarios = document.getElementById('comentarios').value;
    
    var aceptacion = document.getElementById('acepto');
    var infoSi = document.getElementById('infoSi');
    var infoNo = document.getElementById('infoNo');
    
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) || !(isNaN(nombre))){
        document.getElementsByClassName('mensError')[0].innerHTML = "Error: Nombre incorrecto.";
        return false;
    }
    
    else if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)  || !(isNaN(nombre)) ){
        document.getElementsByClassName('mensError')[1].innerHTML = "Error: Apellido incorrecto.";
        return false;
    }
    else if( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) ){
        document.getElementsByClassName('mensError')[2].innerHTML = "Error: Mail incorrecto.";
        return false;
    }

    
    /*Password Minimo 8 caracteres Maximo 15
    Al menos una letra mayúscula
    Al menos una letra minucula
    Al menos un dígito
    No espacios en blanco
    Al menos 1 caracter especial*/
    

    /*Comentarios*/
    else if ( comentarios == null || comentarios.length == 0 || /^\s+$/.test(comentarios) ){
        document.getElementsByClassName('mensError')[3].innerHTML = "Error: No hay comentarios.";
        return false;
    }
    
    
    /*CheckBox*/
    else if(!aceptacion.checked){
        document.getElementsByClassName('mensError')[4].innerHTML = "Error: Acepta nuestra política de privacidad.";
        return false;
    }
    
    else if((!infoSi.checked) && (!infoNo.checked)){
        document.getElementsByClassName('mensError')[5].innerHTML =" Error: Selecciona una opción";
        return false;
    }
    
}
    
/*Función que limpie los errores*/


var nombreLimpio = document.getElementById('nombre');
var apellidoLimpio = document.getElementById('apellido');
var emailLimpio = document.getElementById('email');

var comentariosLimpio = document.getElementById('comentarios');
var aceptoLimpio = document.getElementById('acepto');
var infoSiLimpio = document.getElementById('infoSi');
var infoNoLimpio = document.getElementById('infoNo');

function funcionLimpieza(){ 
     document.getElementsByClassName('mensError')[0].innerHTML = "";
     document.getElementsByClassName('mensError')[1].innerHTML = "";
     document.getElementsByClassName('mensError')[2].innerHTML = "";
     document.getElementsByClassName('mensError')[3].innerHTML = "";
     document.getElementsByClassName('mensError')[4].innerHTML = "";
     document.getElementsByClassName('mensError')[5].innerHTML = "";

}

nombreLimpio.onfocus = funcionLimpieza;
apellidoLimpio.onfocus = funcionLimpieza;
emailLimpio.onfocus = funcionLimpieza;
comentariosLimpio.onfocus = funcionLimpieza;
aceptoLimpio.onfocus = funcionLimpieza;
infoSiLimpio.onfocus = funcionLimpieza;
infoNoLimpio.onfocus = funcionLimpieza;


    







 
