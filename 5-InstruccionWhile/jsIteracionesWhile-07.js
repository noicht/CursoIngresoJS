/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num;
	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";


	do
	{
		num = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + num;
		contador++;

		respuesta = prompt("Ingresa otro? si/no ")




	} while(respuesta == "si");


	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN