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
	for (j = 0; j < arguments.length; j++) {
		sumArray.push(sumCalculate(arguments[j]));
		console.log(sumCalculate(arguments[j]));
	}
	maxIndex = max(sumArray);
	console.log(maxIndex);
	console.log(arguments[maxIndex]);
	return arguments[maxIndex];
}
function sumCalculate (arr) {
	for (k = 0, sum=0; k < arr.length; k++) {
		if (typeof arr[k] == 'number'){
			sum = sum + arr[k];
		}
	}
	return sum;
}
function max (arr){
	max = arr[0];
	for (l=0; l< arr.length; l++){
		if (arr[l] >= max) {max = arr[l]; maxIndex = l;};
	}
	console.log('max', max, 'maxIndex', maxIndex);
	return maxIndex;
}

compareArraySum(A,B);
