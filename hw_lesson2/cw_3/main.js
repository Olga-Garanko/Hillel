/*do {
	var a = +prompt('Введите небольшое число!', 0)
} while (isNaN(a));
do {
	var b = +prompt('Введите большое число!', 0)
} while (isNaN(b));

console.log(a, b);
for (i=a; i <= b; i++){
	if (i%2 == 0) {
		console.log(Math.pow(i,2));
	}
}
console.log('------');*/
do {
	c = +prompt('Введите простое число > 1!', 0)
} while ((isNaN(c)) || (c <= 1));

for (i=2; i <= c; i++){
	if (c%i == 0) {
		console.log('число не простое');
		break;
	} else {
		console.log('число простое');
		break;
	}
}
