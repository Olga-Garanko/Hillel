// Домашнее задание 12
// #2
// Написать функцию `doMath(x, znak, y)`, которая получает 3 аргумента: числа `x` и `y`, строку `znak`.
// В переменной знак может быть: `+, -, *, /, %, ^`.
// Вывести результат математического действия, указанного в переменной `znak`.
do {
	x = +prompt('Введите первый операнд:')
} while (isNaN(x));
do {
	znak = prompt('Введите оператор:');
} while (!((znak == '+') || (znak == '-') || (znak == '*') || (znak == '/') || (znak == '%') || (znak == '^')));
do {
	y = +prompt('Введите второй операнд:')
} while (isNaN(y));

function doMath(op1, operator, op2){
	switch(operator) {
	  case '+':
	    result = op1 + op2;
	    break;
	  case '-':
		result = op1 - op2;
		break;
	  case '*':
	    result = op1 * op2;
	    break;
	  case '/':
	  	if (op2 == 0) { console.log("Деление на 0 невозможно"); result = undefined;}
	  	else { result = op1 / op2; }
	  	break;
	  case '%':
	    result = op1 % op2;
	    break;
	  case '^':
	    result = op1 ^ op2;
	    break;
	  default:
	  	result = 'error';
	}
	return result;
}

console.log(doMath(x, znak, y));
