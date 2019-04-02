let context = document.querySelector('.context')
let list = [
			{title: 'Hello', action: function() {console.log('1')}},
			{title: 'Super', action: function() {console.log('2')}},
			{title: 'Hero', action: function() {console.log('3')}}
			]
for(let i = 0; i < list.length; i++){
    let li = document.createElement('li')
    li.innerHTML = list[i].title
    li.addEventListener('click', list[i].action)
    context.appendChild(li)
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


