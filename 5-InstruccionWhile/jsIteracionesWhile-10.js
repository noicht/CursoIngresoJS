/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantPositivos = 0;
	let cantNegativos = 0;
	let cantCeros = 0;
	let cantNumerosPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diffPosNeg;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseFloat(prompt("Ingrese un numero: "));

		if(numeroIngresado > 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantPositivos++;

		}
		else if (numeroIngresado < 0) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantNegativos++;

		}
		else if (numeroIngresado == 0)
		{
			cantCeros++;
		}

		if (numeroIngresado % 2 == 0) 
		{
			cantNumerosPares++;
		}

		
		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioPositivos = sumaPositivos / cantPositivos;
	promedioNegativos = sumaNegativos / cantNegativos;
	diffPosNeg = sumaPositivos - sumaNegativos;





	document.writeln("la suma de negativos es :"+sumaNegativos + "---");
	document.writeln("la suma de positivos es :"+sumaPositivos+ "---");
	document.writeln("la cantidad de positivos es :"+cantPositivos+ "---");
	document.writeln("la cantidad de negativos es :"+cantNegativos+ "---");
	document.writeln("la cantidad de ceros es :"+cantCeros+ "---");
	document.writeln("la cantidad de numeros pares es:" + cantNumerosPares + "---");
	
	

	document.writeln("el promedio de positivos es:" + promedioPositivos.toFixed(2));
	document.writeln("el promedio de negativos es:" + promedioNegativos.toFixed(2));
	document.writeln("la diferencia entre positivos y negativos es:" + diffPosNeg);



	

}//FIN DE LA FUNCIÓN