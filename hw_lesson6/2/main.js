// Домашнее задание 15
// #2
// Написать функцию, которая получает 3 аргумента: два числа и функцию.
// Произвести вызов переданной функции с двумя аргументами числами.
// `doFunction(2, 3, power);` в ответе должны получить 8, как 2 в степени 3.
// --------------
// реализовать функции sum, div, mul, power
// `doFunction(16, -23, mul); // 16*(-23)`
function power (a, b){
	return Math.pow(a, b);
}
function sum (a, b){
	return a + b;
}
function div (a, b){
	return a / b;
}
function mul (a, b){
	return a * b;
}

function doFunction (a, b, func) {
	return func(a, b);
}

res = doFunction(16, -23, sum);
console.log(res);