function mostrar()
{

	let notaRandom = Math.floor((Math.random() * 10) + 1);

	if (notaRandom <= 10 || notaRandom >= 9) 
	{
		alert(notaRandom + " Aprobadisimo jefe");
	}

	else if (notaRandom >= 4) 
	{
		alert(notaRandom + " Bien ahi");
	}

	else 
	{
		alert(notaRandom + " Pesimo, desastroso, horripilante, aberrante");
	}

}//FIN DE LA FUNCIÓN