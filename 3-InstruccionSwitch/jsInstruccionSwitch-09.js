function mostrar()
{
	var PRECIO_ESTADIA = 15000;
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	var estacionIngresada =document.getElementById("txtIdEstacion").value;
	var descuento;
	var aumento;

	
	if (estacionIngresada == "Invierno")
	{
		if (destinoIngresado == "Bariloche") 
		{
			aumento = PRECIO_ESTADIA * 0.20;

		}
		else if (destinoIngresado == "Cordoba")
		{
			descuento = PRECIO_ESTADIA * 0.10;
		}
		else if (destinoIngresado == "Mar del plata")
		{
			descuento = PRECIO_ESTADIA * 0.20;
		}




	}

	else if (estacionIngresada == "Verano") 
	{
		if (destinoIngresado == "Bariloche")
		{
			descuento = PRECIO_ESTADIA * 0.20;
		}
		else if(destinoIngresado == "Cordoba")
		{
			aumento = PRECIO_ESTADIA * 0.10;
		}
		else if (destinoIngresado == "Mar del plata")
		{
			aumento = PRECIO_ESTADIA * 0.20;
		}
	}

	else if (estacionIngresada == "Primavera" || estacionIngresada == "Otoño") 
	{
		if (destinoIngresado == "Bariloche") 
		{
			aumento = PRECIO_ESTADIA * 0.10;
		}
		else if (destinoIngresado == "Cataratas")
		{
			aumento = PRECIO_ESTADIA * 0.10;


		}

		else if (destinoIngresado == "Mar del plata")
		{
			aumento = PRECIO_ESTADIA * 0.10;
		}

		else 
		{
			alert("No hay descuento para esta seleccion")
		}
	}

	if (aumento) 
	{
		PRECIO_ESTADIA = PRECIO_ESTADIA + aumento
		alert("El precio con aumento es de $" + PRECIO_ESTADIA);

	}

	if(descuento)
	{
		PRECIO_ESTADIA = PRECIO_ESTADIA - descuento;
		alert("El precio con descuento es de $" + PRECIO_ESTADIA);
	}




}//FIN DE LA FUNCIÓN