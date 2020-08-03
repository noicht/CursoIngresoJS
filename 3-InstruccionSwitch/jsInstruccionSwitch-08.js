function mostrar()
{
	var destinoIngresado =document.getElementById("txtIdDestino").value;
	alert(destinoIngresado);

	switch(destinoIngresado) 
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
			break;

		default:
			alert("Provincia no contemplada");
			break;
	}

}//FIN DE LA FUNCIÓN