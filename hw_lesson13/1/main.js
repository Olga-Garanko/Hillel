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
	let numberInput = document.querySelector('.number-input')
	let rangeInput = document.querySelector('.range-input')
	let diagramValue = document.querySelector('.diagram__value')
	let diagramPercent = document.querySelector('.diagram__percent')
	let ranges = [
		{
			min: 0,
			max: 20,
			percent: 2
		},
		{
			min: 20,
			max: 50,
			percent: 4
		},
		{
			min: 50,
			max: 75,
			percent: 6
		},
		{
			min: 75,
			max: 100,
			percent: 8
		}
	]

	let calculate = (input) => {
		diagramValue.style.height = input + 'px'
		ranges.forEach(range => {
			if ((input > range.min) && (input <= range.max)) {
				diagramPercent.style.height = input*range.percent/100 + 'px'
			}
		}) 
	}

	let init = () => {
		let input = numberInput.value ? numberInput.value : 0
		rangeInput.value = input
		calculate(input)
	}

	let change = (e) => {
		let input = numberInput.value = rangeInput.value = e.target.value
		calculate(input)
	}

	numberInput.addEventListener('input', change)
	rangeInput.addEventListener('input', change)
	
	init()
}
window.addEventListener('load', onLoad)

// old method
/*let onLoad = () => {
	let numberInput = document.querySelector('.number-input')
	let rangeInput = document.querySelector('.range-input')
	let diagramValue = document.querySelector('.diagram__value')
	let diagramPercent = document.querySelector('.diagram__percent')
	let percent = 0

	let calculate = (input) => {
		diagramValue.style.height = input + 'px'
		if ((input > 75) && (input <= 100)) percent = 8
		if ((input > 50) && (input <= 75)) percent = 6
		if ((input > 20) && (input <= 50)) percent = 4
		if ((input > 0) && (input <= 20)) percent = 2
		diagramPercent.style.height = input*percent/100 + 'px'
	}

	let init = () => {
		let input = numberInput.value ? numberInput.value : 0
		rangeInput.value = input
		calculate(input)
	}

	let change = (e) => {
		let input = numberInput.value = rangeInput.value = e.target.value
		calculate(input)
	}

	numberInput.addEventListener('input', change)
	rangeInput.addEventListener('input', change)

	init()
}
window.addEventListener('load', onLoad)*/