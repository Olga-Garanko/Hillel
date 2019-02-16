// Домашнее задание 6
// #1
// Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
// Например A = [23,1,2,52,5,34,23,6,246,436];
// 1. проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// 2. найти максимальное число и минимальное число.

do {
	n = +prompt('Введите размерность массива:', 0)
} while ((isNaN(n)) || (n<=0));

A = [];
B = [];
isPrime = false;

for (i=0; i < n; i++){
	A[i] = Math.floor(Math.random()*501 - 1);
	// from 1 to 500
	for (j = 2; j <= 9; j++) {
		if ((A[i]%j == 0) && (A[i] != j)) {
			isPrime = false;
			break;
		} else {
			isPrime = true;
		}
	}
	console.log(A[i]);
	if (isPrime) { B[B.length] = A[i]; }
}
console.log('массив B', B);
max = A[0];
min = A[0];
for (k=0; k < n; k++){
	if (A[k] >= max) {max = A[k]};
	if (A[k] <= min) {min = A[k]};
}
console.log('max', max);
console.log('min', min);



