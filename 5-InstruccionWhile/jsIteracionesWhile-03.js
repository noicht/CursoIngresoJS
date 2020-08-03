/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	
	claveIngresada = prompt("ingrese la clave.");

	while(claveIngresada != "utn750") 
	{
		claveIngresada = prompt("ingrese la clave.");

	}

	alert("Bienvenido!");

// Tambien puedo usar do while
		
	let clave;

	do 
	{
		clave = prompt("Ingrese la clave.");

	} while(clave != "utn750");

	alert("Bienvenido!");

 

	
}//FIN DE LA FUNCIÓN
