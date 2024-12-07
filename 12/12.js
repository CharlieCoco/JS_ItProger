/*1 СПОСОБ*/

/*
function checkForm(el){
	
	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;
	
	var fail = "";
	
	if(name == "" || pass == "" || repass == "")
		fail = "Заполните все поля";
	else if(name.length < 2 || name.length > 100)
		fail = "Введите корректное имя";
	else if(pass != repass)
		fail = "Пароли должны совпадать";
	else if(pass.split("&").length > 1)
		fail = "Некорректный пароль";
	
	if(fail != ""){
		document.getElementById('error').innerHTML = fail;
		return false;
	}
	else{
		alert("Все данные корректно заполнены");
		//Если надо перейти на дуругую страницу
		window.location = "https://vk.com";
		return false;
		
		//Если надо остаться на этой же странице
		//return true;
	}
}
*/



/*2 СПОСОБ*/

document.getElementById('main-form').addEventListener("submit", checkForm);// отслеживаемое событие, вызываемая форма

function checkForm(event){
	event.preventDefault(); // отключаем стандартное поведение события - перезагрузку страницы
	
	var el = document.getElementById('main-form');
	
	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;
	
	var fail = "";
	
	if(name == "" || pass == "" || repass == "")
		fail = "Заполните все поля";
	else if(name.length < 2 || name.length > 100)
		fail = "Введите корректное имя";
	else if(pass != repass)
		fail = "Пароли должны совпадать";
	else if(pass.split("&").length > 1)
		fail = "Некорректный пароль";
	
	if(fail != "")
		document.getElementById('error').innerHTML = fail;
	else{
		alert("Все данные корректно заполнены");
		window.location = "https://vk.com";
	}
	
}

