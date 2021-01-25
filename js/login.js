
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