/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuento;
	var resultado;

	sueldo = document.getElementById("txtIdImporte").value;
	descuento = sueldo * 0.25;

	resultado = document.getElementById("txtIdResultado").value = parseFloat(sueldo) - parseFloat(descuento);


}
