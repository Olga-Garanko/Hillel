// Домашнее задание 14
// #1
// Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4

centerArrayVar = [];

function centerArray () {
	for (var i = 0; i < arguments.length; i++) {
		centerArrayVar = centerArrayVar.concat(centerValue(arguments[i]));
	}
	return centerArrayVar;
}

function centerValue (arr) {
	var valueArr = [];
	if (arr.length%2 == 0) {
		valueArr.push(arr[Math.floor(arr.length/2)-1]);
		valueArr.push(arr[Math.floor(arr.length/2)]);
	} else {
		valueArr.push(arr[Math.floor(arr.length/2)]);
	}
	return valueArr;
	
}

res = centerArray([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], [1, 2, 8, 4, 5]);
console.log(res);