var counter = 0;

function onClickButton() {
	counter++;
	alert("Hello out tag, but from JS file");
	console.log(counter);
}


function onClickButton1(el) {
	counter++;
	el.innerHTML = "ВЫ нажали на кнопку: " + counter + "раз"
}


function onInput(el) {
	if(el.value == "Hello")
		alert("И тебе привет!");
	console.log(el.value);
}


function ChangeCSS(el) {
	el.style.background = "red";
	el.style.color = "blue";
	
	el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;";
	
}