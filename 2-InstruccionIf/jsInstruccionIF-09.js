function mostrar()
{

	let randomInt = Math.floor((Math.random() * 10) + 1);
	alert(randomInt);

	// Tambien se puede hacer

	let vMax = 10;
	let vMin = 1;
	let vNum = Math.round( Math.random() *  (vMax - vMin) + vMin);

	alert(parseFloat(vNum));


}//FIN DE LA FUNCIÓN