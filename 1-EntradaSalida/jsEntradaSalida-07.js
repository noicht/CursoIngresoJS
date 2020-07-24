/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1;
var num2;
var result;

function sumar()
{	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	result = parseInt(num1) + parseInt(num2);
	alert("El resultado es: " + result);
}

function restar()
{
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	result = parseInt(num1) - parseInt(num2);
	alert("El resultado es: " + result);
}

function multiplicar()
{
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	result = parseInt(num1) * parseInt(num2);
	alert("El resultado es: " + result); 
	
}

function dividir()
{
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	result = parseFloat(num1) / parseFloat(num2);
	alert("El resultado es: " + result);
	
}

