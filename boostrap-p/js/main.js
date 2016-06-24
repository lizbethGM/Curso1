var usuario = "mi_correo@hotmail.com"
var pass = "curso"

$(document).on("ready", enviar);

function enviar(){
	$("#enviar").on("click", login)
}

function login(){
    correo = $("#usuario").val();
    contra = $("#pass").val();

if(correo == usuario && pass == "curso"){
alert("Inicio correo");
window.location.href = "https://login.live.com/";
}else{
	alert("Usuario o contraseña incorrecta");

  }
}