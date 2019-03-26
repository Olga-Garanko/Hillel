/*Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).
Изменяя состояние range меняется состояние поля ввода number. И наоборот.
Реализовать блок-диаграмму, который в пикселях будет отображать значение range. Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.
Красный блок - количество комиссии. Комиссия вычисляется по формуле:
(range < 20) -> 2%
(20 - 50)  -> 4%
(50 - 75)  -> 6%
(75 - 100)  -> 8%
Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px*/


let onLoad = () => {
	let textInput = document.querySelector('.text-input')
	let rangeInput = document.querySelector('.range-input')
	let diagramValue = document.querySelector('.diagram__value')
	let diagramPercent = document.querySelector('.diagram__percent')
	let percent = 0

	let calculate = (input) => {
		diagramValue.style.height = input*2 + 'px'
		if ((input > 75) && (input <= 100)) percent = 8
		if ((input > 50) && (input <= 75)) percent = 8
		if ((input > 20) && (input <= 50)) percent = 6
		if ((input > 0) && (input <= 20)) percent = 4
		diagramPercent.style.height = (input*percent/100)*2 + 'px'
	}

	calculate(80)

	let change = (e) => {
		let input = textInput.value = rangeInput.value = e.target.value
		calculate(input)
	}

	textInput.addEventListener('change', change)
	rangeInput.addEventListener('change', change)
}
window.addEventListener('load', onLoad)