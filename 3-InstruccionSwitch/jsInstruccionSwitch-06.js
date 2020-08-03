function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	alert(horaDelDia);


	let hora = parseInt(document.getElementById("txtIdHora").value);

	switch(true) 
	{
		case(hora >= 7 && hora <= 11):
			alert("Es de mañana");
			break;
		case(hora >= 12 && hora <= 19):
			alert("Es de tarde");
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche");
			break;

		default:
			alert("No existe");
			break;	




	
	}

}//FIN DE LA FUNCIÓN