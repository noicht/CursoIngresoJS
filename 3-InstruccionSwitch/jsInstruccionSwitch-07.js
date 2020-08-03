function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Bariloche":
			alert("Oeste");
			break;
		
		default:
			alert("Esta provincia no esta contemplada");
			break;		


	}

}//FIN DE LA FUNCIÓN