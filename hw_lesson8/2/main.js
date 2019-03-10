/*Домашнее задание 19
#2
Создать функцию, которая принимает объект, меняет местами ключ и значение и возвращает новый объект. {name: 'mykola', age: 56} -> {mykola: 'name', 56: 'age'}*/
function revertObject(obj) {
	let objReversed = {}
	console.log('Исходный объект', obj)
    for (let key in obj) {
		objReversed[obj[key]] = key
    }
/*	Object.keys(obj).forEach((key) => {
		objReversed[obj[key]] = key
	})*/
	return objReversed
}
console.log('Результат', revertObject({name: 'mykola', age: 56, valid: false}))