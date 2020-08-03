/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero = 0;
	let numeroIngresado = 0;
	let numeroMaximo = 0;
	let numeroMinimo = 0;
	let respuesta;

	do 
	{

		
		
		if(banderaDelPrimero == 1)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		banderaDelPrimero++;

	

		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		if(numeroIngresado > numeroMaximo) 
		{
			numeroMaximo = numeroIngresado;
		}
		else if (numeroIngresado < numeroMinimo) 
		{

			numeroMinimo = numeroIngresado;

		}

		 // numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		respuesta = prompt("Desea continuar? si/no");


	} while(respuesta == "si");





	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN