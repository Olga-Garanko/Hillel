/*Домашнее задание 29
#1
По шаблону в index.html занятия выбрать фильмы, отобразить итоговую стоимость заказа. В консоль вывести названия заказанных фильмов и стомость всех фильмов. Если нету цены или названия => игнорировать этот фильм.*/
window.onload = function(){

    let films = [...document.querySelectorAll('.cinema__item')]
    let sum = 0
    let valuedFilms = films.filter(item => {
        let title = item.querySelectorAll('td')[0].innerHTML
        let price = item.querySelectorAll('td')[1].innerHTML
        return (title && price)
    })
    valuedFilms.forEach(item => {
        let title = item.querySelectorAll('td')[0].innerHTML
        let price = item.querySelectorAll('td')[1].innerHTML
        console.log(title + ' - ' + price)
        sum += parseInt(price)
   })
console.log(sum)
}

