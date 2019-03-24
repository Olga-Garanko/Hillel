/* домашнее задание 21
#1
1) Есть 3 `input`. Выводить в `textarea` содержимое всех полей ввода через запятую. Использовать setInterval.*/

const textarea = document.querySelector('.textarea')
const inputs = [...document.querySelectorAll('.input')]

/*setInterval(() => {
	let result = ''
	inputs.forEach((item, i) => {
		if (item.value !== '') {
			result+= `${item.value}, `
		}
	})
	result = result.substring(0, result.length - 2)
	textarea.value = result
}, 1000)*/

const getInputsValue = () => {
	let result = ''
	inputs.forEach((item, i) => {
		if (item.value !== '') {
			result+= `${item.value}, `
		}
	})
	result = result.substring(0, result.length - 2)
	textarea.value = result
}
setInterval(getInputsValue, 1000)
