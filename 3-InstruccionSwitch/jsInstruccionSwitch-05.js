function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	alert(horaDelDia);

	let hora = parseInt(document.getElementById("txtIdHora").value);

	switch(true) 
	{
		case ( hora >= 7 && hora <= 11):
			alert("Es de mañana");
			break;

		default:
			alert(null);
			break;	
	}
	
	



}//FIN DE LA FUNCIÓN