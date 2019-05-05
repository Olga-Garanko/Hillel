/* Домашнее задание 35
#2
напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:
var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];
console.log(pluck(characters, 'name')); // ['barney', 'fred']
*/
document.addEventListener('DOMContentLoaded', () => {
let characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];	
let pluck = (arr, key) => {
	let result = [];
	arr.forEach(item => {
		result.push(item[key])
	})
	return result
}
console.log(pluck(characters, 'name'));
})