/*Домашнее задание 29
#1
По шаблону в index.html занятия выбрать фильмы, отобразить итоговую стоимость заказа. В консоль вывести названия заказанных фильмов и стомость всех фильмов. Если нету цены или названия => игнорировать этот фильм.*/
/*window.onload = function(){

    let films = [...document.querySelectorAll('.cinema__item')]
    let sum = 0
    let valuedFilms = films.filter(item => {
        let title = item.querySelectorAll('td')[0].innerHTML
        let price = item.querySelectorAll('td')[1].innerHTML
        return (title && price)
    }).forEach(item => {
        let title = item.querySelectorAll('td')[0].innerHTML
        let price = item.querySelectorAll('td')[1].innerHTML
        console.log(title + ' - ' + price)
        sum += parseInt(price)
   })
console.log(sum)
}*/

window.onload = function(){

    let films = [...document.querySelectorAll('.cinema__item')]
    let valuedFilms = films.filter(item => {
        let title = item.querySelectorAll('td')[0].innerHTML
        let price = item.querySelectorAll('td')[1].innerHTML
        return (title && price)
    }).forEach(item => {
        let title = item.querySelectorAll('td')[0].innerHTML
        let price = item.querySelectorAll('td')[1].innerHTML
        console.log(title + ' - ' + price)
   	})

    let prices = [...document.querySelectorAll('.cinema__item td:last-child')]
    let sum = prices
    				.filter(item => {return !!(item.innerHTML)})
    				.reduce((prev, next) => {return prev + parseInt(next.innerHTML)}, 0)
	console.log(sum);		
}



