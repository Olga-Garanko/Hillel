/*Домашнее задание 23
#3
Каждое перемещение из задания №2 также меняет цвет блока на случайный. Создать фунцию getRandColor()*/

const blocks = [...document.querySelectorAll('.block')]

// setInterval(callback, repeat)

setInterval(() => {
	const width = document.documentElement.clientWidth
	const height = document.documentElement.clientHeight
	blocks.forEach(item => {
		const elemWidth = parseInt(getComputedStyle(item).width)
		const elemHeight = parseInt(getComputedStyle(item).height)
		const randomTop = Math.floor(Math.random()*(height - elemWidth))
		const randomLeft = Math.floor(Math.random()*(width - elemHeight))
		item.style.top = randomTop + 'px'
		item.style.left = randomLeft + 'px'

		const randomR = Math.floor(Math.random()*255)
		const randomG = Math.floor(Math.random()*255)
		const randomB = Math.floor(Math.random()*255)

		item.style.backgroundColor = `rgba(${randomR}, ${randomG}, ${randomB})`

		console.log(item)
	})
}, 2000)