// Домашнее задание 11
// #1
// a) Написать функцию заполнения массива. Имя произвольное.
// b) написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.

function fillArray(list){
    for(i = 0; i < list.length; i++){
        list[i] = Math.floor(Math.random()*10);
    }
}

A = new Array(10);
fillArray(A);
console.log(A);

B = new Array(10);
fillArray(B);
console.log(B);

function compareArraySum () {
	sumArray = [];
	for (i = 0; i < arguments.length; i++) {
		sumArray.push(sumCalculate(arguments[i]));
		console.log(sumCalculate(arguments[i]));
	}
	max(sumArray);
	console.log(maxIndex);
	console.log(arguments[maxIndex]);
	return arguments[maxIndex];
}
function sumCalculate (arr) {
	for (j = 0, sum=0; j < arr.length; j++) {
		if (typeof arr[j] == 'number'){
			sum = sum + arr[j];
		}
	}
	return sum;
}
function max (arr){
	max = arr[0];
	for (k=0; k < arr.length; k++){
		if (arr[k] >= max) {max = arr[k]; maxIndex = k;};
	}
	console.log('max', max, 'maxIndex', maxIndex);
}

compareArraySum(A,B);
