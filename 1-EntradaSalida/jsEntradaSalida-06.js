/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var num1;

	var num2;

	var suma;

	 

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;


	suma = parseInt(num1) + parseInt(num2);



	alert("Resultado: " + suma);
}

