function toCelsius(){
	let input = 
		document.getElementById("temperature").value;

	let celsius = (input - 32) * 5/9;
	document.getElementById("result").innerText = celsius;
} 