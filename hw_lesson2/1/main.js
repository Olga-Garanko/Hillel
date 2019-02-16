// Домашнее задание 3
// #1
// Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры

do {
	n = +prompt('Введите число n!', 0)
} while ((isNaN(n)) || (n<=0));

if (n==1) { sum = 1}
else if (n==2) { sum = 2}
else {
	for (i=3, prev1=1, prev2=1, sum=2; i <= n; i++){
		num = prev1 + prev2;
		prev1 = prev2;
		prev2 = num;
		sum = sum + num;
	}
}

console.log(sum);