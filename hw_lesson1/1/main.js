var S = prompt('Площадь основы', 0);
while (isNaN(S)) {
	S = prompt('Введите число! Площадь основы', 0)
};
var H = prompt('Высота', 0);
while (isNaN(H)) {
	H = prompt('Введите число! Высота', 0)
};
var res = S*H,
	R = Math.sqrt(res/Math.PI*H);

document.write("**************<br><br>");

document.write('Обьем цилиндра с площадью основы *S* = ' + S + ', радиусом *R* = ' + R + ' и высотой *H* = ' + H + ' равен:<br><br>');
document.write('--------------------<br><br>');
document.write('V = ' + res + '<br><br>');
document.write('--------------------<br><br>end.');