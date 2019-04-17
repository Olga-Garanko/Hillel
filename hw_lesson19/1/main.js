/*Домашнее задание 33
#1
Используя github API делаем запрос на ресурс: https://api.github.com/orgs/hillel-front-end
Создаем простой интерфейс (в виде таблицы) с следующими данными.
На главной отображается список все репозиториев
Вывести default branch для каждого репозитория
Дату последнего update
Список языков, которые используются в репозитории*/
document.addEventListener('DOMContentLoaded', () => {
let getData = (e) => {
    let ajaxQuery = new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/orgs/hillel-front-end/repos', true)
        xhr.send()
        xhr.addEventListener('readystatechange', function(){
            if (xhr.readyState != 4) return
            result = JSON.parse(xhr.responseText)
            resolve(result)
        })
    }).then(result => {
        let tbl = document.createElement('table')
        let tr = document.createElement('tr')
        let th01 = document.createElement('th')
        th01.innerHTML = 'Repo'
        let th02 = document.createElement('th')
        th02.innerHTML = 'Default branch'
        let th03 = document.createElement('th')
        th03.innerHTML = 'Update'
        let th04 = document.createElement('th')
        th04.innerHTML = 'Langs'
        tr.appendChild(th01)
        tr.appendChild(th02)
        tr.appendChild(th03)
        tr.appendChild(th04)
        tbl.appendChild(tr)

        for (let i=0; i < result.length; i++) {
            let tr = document.createElement('tr')
            let td01 = document.createElement('td')
            td01.innerHTML = result[i].name
            let td02 = document.createElement('td')
            td02.innerHTML = result[i].default_branch
            let td03 = document.createElement('td')
            td03.innerHTML = result[i].updated_at
            tr.appendChild(td01)
            tr.appendChild(td02)
            tr.appendChild(td03)
            let td04 = document.createElement('td')
            let ajaxQuery = new Promise(function(resolve, reject){
                let xhr = new XMLHttpRequest()
                xhr.open('GET', result[i].languages_url, true)
                xhr.send()
                xhr.addEventListener('readystatechange', function(){
                    if (xhr.readyState != 4) return
                    result = JSON.parse(xhr.responseText)
                    resolve(result)
                })
            }).then(result => {
                td04.innerHTML = Object.keys(result).join(', ')
                tr.appendChild(td04)
                tbl.appendChild(tr)
            })
        }
        let body = document.querySelector('body')
        body.appendChild(tbl)
    })
}
let button = document.querySelector('button')
button.addEventListener('click', getData)
})

//https://api.github.com/repos/hillel-front-end/front-end-pro-2018/languages


