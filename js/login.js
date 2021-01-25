
var ingresar = () =>{
 var usuario = document.getElementById("usuario").value;
 var password = document.getElementById("password").value;
 var datosUsuario = JSON.parse(localStorage.getItem('usuario'));

 if(usuario == datosUsuario.usuario && password == datosUsuario.password){
     alert('Ingreso exitoso');
 }
 else {
     alert('Los datos ingresados son incorrectos');
 }
}