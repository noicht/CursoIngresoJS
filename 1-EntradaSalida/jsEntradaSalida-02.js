/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var vNombre;
	const cNombre = "Pepe" // No cambia
	var vApellido;

	vNombre = prompt("Nombre","Ingrese un Nombre"); // asigno prompt a vNombre
	alert(vNombre);
	alert(cNombre);
	vApellido = prompt("Apellido","Ingrese un apellido");
	alert(vApellido);
}

