// Домашнее задание 15
// #2
// Написать функцию, которая получает 3 аргумента: два числа и функцию.
// Произвести вызов переданной функции с двумя аргументами числами.
// `doFunction(2, 3, power);` в ответе должны получить 8, как 2 в степени 3.
// --------------
// реализовать функции sum, div, mul, power
// `doFunction(16, -23, mul); // 16*(-23)`

function doFunction (a, b, func) {
	switch(func) {
		case 'power': return Math.pow(a, b);
		case 'sum': return a + b;
		case 'div': return a / b;
		case 'mul': return a * b;
		default: return;
	}
}

res = doFunction(16, -23, 'sum');
console.log(res);