function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	var mes = document.getElementById("txtIdMes").value;

	switch(mes) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":

		alert("Falta para el invierno");
		break;

		case "Junio":
		case "Julio":
		case "Agosto":

		alert("Abrigate que hace frio");
		break;

		default:
		alert("Ya paso el frio");
		break;



	}




}//FIN DE LA FUNCIÓN