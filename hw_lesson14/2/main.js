/*Домашнее задание 26
#2
При нажатии на CTRL персонаж должен "присесть" (уменьшиться в размерах по высоте на 40%, по ширине - увеличится на 15%)*/

let platformer = document.querySelector('.platformer')

function move(e) {
	switch(e.keyCode) {
		case 17: 
			platformer.style.transform = 'scaleY(0.6) scaleX(1.15)'
			setTimeout(() => platformer.style.transform = 'scaleY(1.0) scaleX(1.0)', 1000)
	}
}
document.addEventListener('keydown', move)
