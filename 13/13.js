var counter = 0;
//-----------------ИНТЕРВАЛЫ------------------
/*
setInterval(my_func, 1000); // function, time(ms)

function my_func(){
	counter++;
	console.log("Counter: " + counter);
}
*/

/*setInterval(function(){
	counter++;
	console.log("Прошло секунд: " + counter);
}, 1000); */

/*
var id = setInterval(my_func, 1000); // function, time(ms)

function my_func(){
	counter++;
	console.log("Counter: " + counter);
	if(counter == 3)
		clearInterval(id);// прерываем интервал
}
*/

//-----------------ТАЙМЕРЫ------------------
setTimeout(function(){
	console.log("Timer is working");
}, 1000); 

/*
setTimeout(my_func, 1000); // function, time(ms)

function my_func(){
	console.log("Timer is working");
}
*/