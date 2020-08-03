function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	let mes = document.getElementById("txtIdMes").value;

	switch(mes) 
	{
		case "Febrero":
		alert("Este mes tiene 29 dias");
		break;

		default:
		alert("Este mes NO tiene 29 dias");
		break;
	}
	
	


}//FIN DE LA FUNCIÓN