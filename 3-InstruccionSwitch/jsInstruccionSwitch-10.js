function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;

	if (estacionIngresada == "Invierno") 
	{
		if (destinoIngresado == "Bariloche")
		{
			alert("Se viaja");
		}
		else 
		{
			alert("No se viaja");
		}
	}

	else if (estacionIngresada == "Verano")
	{
		if (destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
		{
			alert("Se viaja");
		}
		else 
		{
			alert("No se viaja");
		}
	}

	else if (estacionIngresada == "Otoño")
	{
		alert("Se viaja a todos los destinos")
	}

	else if (estacionIngresada == "Primavera")
	{
		if(destinoIngresado != "Bariloche")
		{
			alert("Se viaja");
		}
		else 
		{
			alert("No se viaja");
		}
	}
	else 
	{
		alert("Este lugar/estacion no esta contemplado en el programa");
	}
}//FIN DE LA FUNCIÓN