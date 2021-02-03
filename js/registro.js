
//funcion para validar que los campos esten completos
var validacion = () => {
    var valores = [];
    var valido = true;
    //agrego datos del usuario en un array
    valores.push(document.getElementById("nombre").value);
    valores.push(document.getElementById("usuario").value);
    valores.push(document.getElementById("password").value);

    for(let i=0; i<valores.length; i++){
        if (valores[i] == ""){
            valido = false;
        }
    }

    if(valido == true){
        registro();
    } else{
        alert('Por favor completa todos los campos');
    }
        

}

var registro = () =>{
    var nombre = document.getElementById("nombre").value; //obtengo los valores del los campos del form
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var formulario = document.getElementById("formulario");
    var linkIngreso = document.getElementById("linkIngreso");
    
    //creo un objeto usuario
    var datosUsuario = {
        nombre: nombre,
        usuario: usuario,
        password: password
    };


    //agrego los datos del usuario al localStorage
    localStorage.setItem(datosUsuario.usuario, JSON.stringify(datosUsuario));
    console.log(datosUsuario)
    formulario.reset(); //blanquea los campos del form
    alert('Registro exitoso. Bienvenido '+datosUsuario.usuario);
    linkIngreso.click(); //redirecciona a login
}