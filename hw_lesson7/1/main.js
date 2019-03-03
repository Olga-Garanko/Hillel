/*Домашнее задание 16
#1
Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.*/
function inArray(str, arr) {
	console.log(str, arr);
	var isInArray = false;
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].indexOf(str));
		if (arr[i].indexOf(str) >= 0) {
		 isInArray = true;
		 break;
		}
	}
	return isInArray;
}

console.log(inArray('hello', ['svnj', 'cvpoq', 'hhello', 'hello', 'hello']))
