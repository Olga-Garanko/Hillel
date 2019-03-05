/*Домашнее задание 17
#2
1) Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, который состоит из свойство обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта
assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }

2) В задачу  добавить 3ий аргумента flag, который является boolean. Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго. Значение false - это значение по умолчанию.
assignObjects({...}, {...}, false);

3) В задачу п.3, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.
*/
console.log('-------- assignObjects ---------');
function assignObjects(obj1, obj2) {
	var result = {};
	for (var i = 0; i < arguments.length; i++) {
		console.log(`arguments[${i}]`, arguments[i]);
		for (key in arguments[i]) { result[key] = arguments[i][key]; }
	}
	console.log('result', result);
	return result;
}
assignObjects({ x: 10, y: 20 }, { z: 30 }, { a: 30 });
assignObjects({ x: 10 }, { x: 20, y: 30 });


console.log('-------- assignObjectsFlag ---------');
function assignObjectsFlag(obj1, obj2, flag = false) {
	var result = {};
	for (var i = 0; i < arguments.length; i++) {
		console.log(`arguments[${i}]`, arguments[i]);
		for (key in arguments[i]) {
			if (flag) {
				if (!result[key]) result[key] = arguments[i][key];
			} else {
				result[key] = arguments[i][key];
			}
		}
	}
	console.log('result', result);
	return result;
}
assignObjectsFlag({ x: 10 }, { x: 20, y: 30 }, true);
assignObjectsFlag({ x: 10 }, { x: 20, y: 30 }, false);
assignObjectsFlag({ x: 10 }, { x: 20, y: 30 });