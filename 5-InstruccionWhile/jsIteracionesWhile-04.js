/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	do 
	{
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	
	document.getElementById("txtIdNumero").value = numeroIngresado;
/* Puedo negar cualquier otro valor NaN usando lo comentado 

	if (isNaN(numeroIngresado)) 
	{
		numeroIngresado = -1;
	}
*/



	} while(!(numeroIngresado >= 0 && numeroIngresado <= 10));
}//FIN DE LA FUNCIÓN