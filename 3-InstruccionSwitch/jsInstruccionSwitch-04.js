function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	

	let mes = document.getElementById("txtIdMes").value;
	let anio = 2020;
	switch (mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":

		alert("Tiene 31 dias");
		break;

		case "Febrero":

		if (anio == 2020)
		{
			alert("Tiene 29 dias");
			
		}
		else 
		{
			alert("Tiene 28 dias");
		
		}

		break;

		default:
		alert("Tiene 30 dias");
		break;


	}

	



}//FIN DE LA FUNCIÓN