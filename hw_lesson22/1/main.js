/*Написать функцию рассчета суммы всех чисельных свойств объекта, включая вложености. Функция не должна быть описана в структуре объекта.*/
document.addEventListener('DOMContentLoaded', () => {
	let character = { 'name': 'barney', 'age': 10, 'salary': {'annual': 100, 'monthly': {'jan': 10, 'feb': 20}}};
	let result = 0;
	let sum = obj => {
		Object.keys(obj).forEach(item => {
			if (typeof obj[item] == 'number'){
				result = result + obj[item]
			}
			if (typeof obj[item] == 'object'){
				sum(obj[item])
			}
		})
		return result;
	}
	console.log(sum(character))
})