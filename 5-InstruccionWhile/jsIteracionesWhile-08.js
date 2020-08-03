/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let num = 0;
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	do 
	{
		num = parseInt(prompt("Ingrese un numero: "));
		if (num >= 0)
		{
			sumaPositivos = sumaPositivos + num;
		}
		else 
		{
			multiplicacionNegativos = multiplicacionNegativos * num;
		}
		contador++;

		respuesta = prompt("Ingresa otro? si/no ");







	} while(respuesta == 'si');









	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN