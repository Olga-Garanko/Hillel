/*Домашнее задание 28
#2
Применить меню к домашке с лекции №14 (персонаж). Создать actions: Jump, Remove, ChangeColor.
Меню должно всегда открыватся в окне, не создавая скрола.*/

let platformer = document.querySelector('.platformer')
const height = 50
let styles = window.getComputedStyle(platformer)
platformer.style.top = parseInt(styles.top) + 'px'
let bgColor = styles.backgroundColor

let move = (e) => {
	platformer.style.top = parseInt(platformer.style.top) - height + 'px'
	setTimeout(() => platformer.style.top = parseInt(platformer.style.top) + height + 'px', 500)
}
let remove = (e) => {
	platformer.style.display = 'none'
}
let show = (e) => {
	platformer.style.display = 'block'
}
let changeColor = (e) => {
	platformer.style.backgroundColor = 'yellow'
}
let resetColor = (e) => {
	platformer.style.backgroundColor = bgColor
}

let list = [
			{title: 'Jump', action: move},
			{title: 'Remove', action: remove},
			{title: 'Show', action: show},
			{title: 'ChangeColor', action: changeColor},
			{title: 'ResetColor', action: resetColor}
			]
let context = document.querySelector('.context')
if (!context) {
	let ul = document.createElement('ul')
	ul.classList.add('context')
	for(let i = 0; i < list.length; i++){
	    let li = document.createElement('li')
	    li.innerHTML = list[i].title
	    li.addEventListener('click', list[i].action)
	    ul.appendChild(li)
	}
	document.body.appendChild(ul)
	context = document.querySelector('.context')
}

let contextmenu = (e) => {
	e.preventDefault()
	context.classList.add('active')
	context.style.top = e.clientY + 'px'
	context.style.left = e.clientX + 'px'
}
document.addEventListener('contextmenu', contextmenu)

document.addEventListener('click', (e) => {
	if (!context.contains(e.target)) context.classList.remove('active')
})




