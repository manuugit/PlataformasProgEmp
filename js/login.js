
var ingresar = () =>{
 var usuario = document.getElementById("usuario").value;
 var password = document.getElementById("password").value;
 var datosUsuario = JSON.parse(localStorage.getItem('usuario'));
 var linkGaleria = document.getElementById("linkGaleria");

 if(usuario == datosUsuario.usuario && password == datosUsuario.password){
     alert('Ingreso exitoso');
     linkGaleria.click(); //redirecciona a galeria
 }
 else {
     alert('Los datos ingresados son incorrectos');
 }
}

var recordarPsw =() =>{
    var usuario = document.getElementById("usuario").value; //obtengo el nombre de usuario
    var datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    //verificar que el usuario está en localStorage
    if(usuario == datosUsuario.usuario){
        console.log(datosUsuario.password);
        alert("Su contraseña:"+datosUsuario.password);
    }
    else {
        alert('No se encontró el nombre de usuario. Por favor revisa');
    }
}