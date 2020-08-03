function mostrar()
{
	let num;
	let i = 0;
	let acumulador = 0;
	let promedio = 0;
	
	while (i < 5) 
	{
		num = parseInt(prompt("Ingrese un numero: "));
		acumulador = parseInt(acumulador) + num;
		i++

	}

	promedio = acumulador / i;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;






	/*

	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
	*/
}//FIN DE LA FUNCIÓN