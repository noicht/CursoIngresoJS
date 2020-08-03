function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	let mes = document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Enero":
		alert("Que comiences bien el año!");
		break;

		case "Marzo":
		alert("A claseeeee");
		break;

		case "Julio":
		alert("Vacacionessssss");
		break;

		case "Diciembre":
		alert("Felices fiestas!");
		break;

		default:
		alert("Nada");
		break;
	}



}//FIN DE LA FUNCIÓN