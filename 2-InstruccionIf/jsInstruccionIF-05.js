function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (!(edad >= 13 && edad <= 17)) 
	{
		alert("No es adolescente");
	}
	//tomo la edad  
	alert("ok");

}//FIN DE LA FUNCIÓN