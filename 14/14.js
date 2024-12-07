/*var date = new Date(); // создание объекта

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.setFullYear());
console.log(date.setHours());

var arr = [11,22,13,4];
console.log(arr.join(","));
console.log(arr.sort());
var stroka = arr.reverse().join(",");
console.log(stroka);
console.log(stroka.split(","));
*/

class Person{
	constructor(name, age, happiness){
		this.name = name;
		this.age = age;
		this.happiness = happiness;
	}
	
	info(){		
		alert(alex.name);
	}
}


var alex = new Person('Alex', 45, true);
alert(alex.name);
alex.info;
