// Домашнее задание 10
// #2
// 2) В одномерном массиве заполненым случайными числами
//        * Найти разность между максимальным и минимальным элементами массива
//        * Вывести элементы массива, которые больше среднего арифметического
//        * Определить индексы элементов массива, значение которых лежит в указанном пределе. Предел вводится с клавиатуры как A, B
//        * Удалить повторяющиеся элементы из массив, оставить массив уникальных значений

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

diff = max - min;
console.log('Разница между max i min', diff);

for (i=0,sum=0; i < A.length; i++){
	sum+= A[i];
}
avg = sum/A.length;
console.log('Среднее арифметическое', avg);
console.log('Елементы больше среднего арифметического');
for (i=0,sum=0; i < A.length; i++){
	if (A[i] > avg) { console.log(A[i]); }
}

do {
	a = +prompt('Введите нижний предел значений:', 0)
} while ((isNaN(a)) || (a<=0));
do {
	b = +prompt('Введите верхний предел значений:', 0)
} while ((isNaN(b)) || (b<=0));

if (a > b) {startValue = b; finishValue = a;}
else { startValue = a; finishValue = b;}

console.log(`Индексы елементов, значения которых в пределах от ${startValue} до ${finishValue}`);
for (i=0; i < A.length; i++){
	if ((A[i] >= startValue) && (A[i] <= finishValue))  { console.log(i); }
}

B = [2, 3, 2, 5, 1, 0, 0, 0];
console.log('Массив В', B);
for (i = 0; i < B.length; i++) {
	for (j = 0; j < B.length; j++) {
		if (i != j) {
			if (B[i] == B[j]) {
				B.splice(i,1);
			}
		}
	}
}
console.log('Массив В без повторов',B);