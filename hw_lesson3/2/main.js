// Домашнее задание 7
// #2
// 2) Элементы массива между min -- max записать в массив B. Массив взять из 1го задания

do {
	n = +prompt('Введите размерность массива:', 0)
} while ((isNaN(n)) || (n<=0));

A = [];
B = [];
isPrime = false;

for (i=0; i < n; i++){
	A[i] = Math.floor(Math.random()*501 - 1);
	// from 1 to 500
}
console.log('массив A', A);

max = A[0];
min = A[0];
for (k=0; k < n; k++){
	if (A[k] >= max) {max = A[k]; maxIndex = k;};
	if (A[k] <= min) {min = A[k]; minIndex = k;};
}
console.log('max', max, 'maxIndex', maxIndex);
console.log('min', min, 'minIndex', minIndex);

if (minIndex > maxIndex) {startIndex = maxIndex; finishIndex = minIndex;}
else { startIndex = minIndex; finishIndex = maxIndex;}

for (var j = startIndex; j <= finishIndex; j++) {
	B[B.length] = A[j];
}

console.log('массив B', B);



