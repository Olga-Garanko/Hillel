/*Домашнее задание 22
#2
Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются на случайное положение в пределах окна. 
Для выполнения нужно почитать про свойство style в DOM элементе*/

const blocks = [...document.querySelectorAll('.block')]

// setInterval(callback, repeat)

setInterval(() => {
	const width = document.documentElement.clientWidth
	const height = document.documentElement.clientHeight
	blocks.forEach(item => {
		let elemWidth = parseInt(getComputedStyle(item).width)
		let elemHeight = parseInt(getComputedStyle(item).height)
		let randomTop = Math.floor(Math.random()*(height - elemWidth))
		let randomLeft = Math.floor(Math.random()*(width - elemHeight))
		item.style.top = randomTop + 'px'
		item.style.left = randomLeft + 'px'
		console.log(item, width, height, elemWidth, elemHeight, randomTop, randomLeft)
	})
}, 2000)