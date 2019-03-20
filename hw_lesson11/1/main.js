/*Домашнее задание 20
Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath.
Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=>  `+ - / * %`.
При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
p = new SuperMath();
p.check(obj);*/ // --> no p.input() -> 3 prompt -> считает
function SuperMath() {
	this.input = function () {
		var znaks = ['+', '-', '/', '*', '%']
		do {
			this.x = +prompt('Введите число!', 0)
		} while (isNaN(this.x));
		do {
			this.y = +prompt('Введите число!', 0)
		} while (isNaN(this.y));
		do {
			this.znak = prompt('Введите один из знаков + - / * %', 0)
		} while (!znaks.includes(this.znak));
	}
}
SuperMath.prototype.znakF = function(x,y,znak) {
	console.log(`${x} ${znak} ${y}`);
	console.log(eval(`${x} ${znak} ${y}`));
	return eval(`${x} ${znak} ${y}`);
}
p = new SuperMath()
obj = {
	x: 1,
	y: 3,
	znak: '+'
}

p.check = function(obj) {
	var isOk = confirm(`Are you really want to use ${obj.znak} with ${obj.x} and ${obj.y}?`)
	if (isOk) {
		this.znakF(obj.x, obj.y, obj.znak)
	} else { this.input(); this.znakF(this.x, this.y, this.znak); }
}
p.check(obj);