; (function() {

window.addEventListener("load", cargaPagina);

	var mensajes = document.getElementById("mensajes");
	var chat = document.getElementById("chat");
	var conversacion = document.getElementsByClassName("w-chat-profile");
	var logos = document.getElementsByClassName("wh-44");
	var contactos = document.getElementsByClassName("w-contact-name");

	function cargaPagina () {
		mensajes.addEventListener("keyup", publicar);
		avatar.addEventListener("click", cambioDeChat);
	}

	function publicar (e) {
		if (e.keyCode == 13) {
			var mensajeOut = document.createElement("div");
			var burbuja = document.createElement("div");
			var mensaje = document.createElement("p");
			var horaMensaje = document.createElement("div");
			var horaPubMensaje = horaPub();

			horaMensaje.textContent = horaPubMensaje;
			mensaje.textContent = this.value;
			mensajes.setAttribute("placeholder","");

			mensajeOut.classList.add("w-message", "w-message-out");
			burbuja.classList.add("w-message-text");
			horaMensaje.classList.add("time");

			chat.appendChild(mensajeOut);
			mensajeOut.appendChild(burbuja);
			burbuja.appendChild(mensaje);
			burbuja.appendChild(horaMensaje);
			mensajes.value = "";
		}
	}

	function horaPub () {
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();

		if (hora < 10 && minuto <10) {
			return "0" + hora + ":" + "0" + minuto;
		} else {
			return hora + ":" + minuto;
		}
	}

	function cambioDeChat () {
		var foto = conversacion[0];
		var nombreContacto = conversacion[1];

		

	}



})();