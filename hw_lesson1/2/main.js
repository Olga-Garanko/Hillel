var a = prompt('Введите число a', 0);
while (isNaN(a)) {
	a = prompt('Введите число! a', 0)
};
var b = prompt('Введите число b', 0);
while (isNaN(b)) {
	b = prompt('Введите число! b', 0)
};
var c = prompt('Введите число c', 0);
while (isNaN(c)) {
	c = prompt('Введите число! c', 0)
};
var sum = 0;
sum = sum + +a + +b + +c;

document.write("**************<br><br>");

document.write('Сумма чисел ' + a + ', ' + b + ' и ' + c + ' равна ' + sum + '<br><br>');
document.write('--------------------<br><br>');
if ((a%2 === 0) & (+a !== 0)) document.write('a равное ' + a + ' парное число<br>');
if ((b%2 === 0) & (+b !== 0)) document.write('b  равное ' + b + ' парное число<br>');
if ((c%2 === 0) & (+c !== 0)) document.write('c  равное ' + c + ' парное число<br>');
document.write('--------------------<br><br>end.');