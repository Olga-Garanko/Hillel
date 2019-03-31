/*Домашнее задание 25
#1
Создать персонажа игры-платформера.
	При нажатии на пробел - прыжок вверх на `h` пикселей.
	При нажатии на стрелку -> передвижение персонажа на `step` пикселей в сторону (и остальные стрелки) // event.keyCode
	
	Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей.
	Прыжок - это анимация движения объекта вверх на `h` пикселей и возврат в изначальное положение (до прыжка)*/

/*Домашнее задание 26
#2
При нажатии на CTRL персонаж должен "присесть" (уменьшиться в размерах по высоте на 40%, по ширине - увеличится на 15%)*/

let platformer = document.querySelector('.platformer')
const step = 40
const height = 50
let styles = window.getComputedStyle(platformer)
platformer.style.top = parseInt(styles.top) + 'px';
platformer.style.left = parseInt(styles.left) + 'px';

function move(e) {
	switch(e.keyCode) {
		case 32: 
			platformer.style.top = parseInt(platformer.style.top) - height + 'px'
			setTimeout(() => platformer.style.top = parseInt(platformer.style.top) + height + 'px', 500);
			break;
		case 37:	// клавиша влево
			platformer.style.left = parseInt(platformer.style.left) - step + 'px'
			break;
		case 38:	 // клавиша вверх
			platformer.style.top = parseInt(platformer.style.top) - step + 'px';
			break;
		case 39:	 // клавиша вправо
			platformer.style.left = parseInt(platformer.style.left) + step + 'px'
			break;
		case 40:	 // клавиша вниз
			platformer.style.top = parseInt(platformer.style.top) + step + 'px';
			break;
		case 17: 
			platformer.style.transform = 'scaleY(0.6) scaleX(1.15)'
			setTimeout(() => platformer.style.transform = 'scaleY(1.0) scaleX(1.0)', 1000)
	}
}
document.addEventListener('keydown', move)
