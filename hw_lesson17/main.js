/* Домашнее задание 31
#1
Создать форму по отправке имени и возраста. 
Сделать валидацию данных (в имени не может быть чисел, в возрасте - букв). 
При успешной валидации сформировать отправку данных с формы на url `/registration`. Использовать метод POST.
В результате ничего в ответе мы не должны получить (кроме ошибки 404). Суть - отправка данных с валидацией.*/

document.addEventListener('DOMContentLoaded', () => {
	let button = document.querySelector('button')
	let surname = document.querySelector('input[name="surname"]')
	let age = document.querySelector('input[name="age"]')
	
	let sendData = (e) => {
		e.preventDefault()
		let formData = new FormData()
		formData.append("surname", surname.value)
		formData.append("age", age.value)
		let letterRegExp  = /[a-zа-яієїґ\'\s]/i
		let numberRegExp  = /[0-9]/i
		if (!numberRegExp.test(surname.value) && !letterRegExp.test(age.value)) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/registration', true);
			xhr.send(formData);
		} else { console.log(data is not valid) }
	}

	button.addEventListener('click', sendData)
})

