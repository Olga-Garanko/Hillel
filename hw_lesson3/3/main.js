// Домашнее задание 8
// #3
// В массиве A поменять местами min и max. Массив взять из 2го задания

do {
	n = +prompt('Введите размерность массива:', 0)
} while ((isNaN(n)) || (n<=0));

A = [];

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

tempValue = A[maxIndex];
A[maxIndex] = A[minIndex];
A[minIndex] = tempValue;
console.log('новый массив A', A);

/*a = 8;
b = 3;
a = a + b; 
b = a - b; 
a = a - b;
console.log(a);
console.log(b);*/




