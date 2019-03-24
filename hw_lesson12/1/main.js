/* домашнее задание 21
#1
1) Есть 3 `input`. Выводить в `textarea` содержимое всех полей ввода через запятую. Использовать setInterval.*/

const textarea = document.querySelector('.textarea')
const inputs = [...document.querySelectorAll('.input')]

/*setInterval(() => {
	let result = ''
	inputs.forEach(item => result+= item.value)
	textarea.value = result
}, 1000)*/

const getInputsValue = () => {
	let result = ''
	inputs.forEach(item => result+= item.value)
	textarea.value = result
}
setInterval(getInputsValue, 1000)
