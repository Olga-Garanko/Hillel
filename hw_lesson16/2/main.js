/*Домашнее задание 30
#2
Дано массив строк. В каждой необходимо найти позицию совпадения `match`. Все совпадения сохранить в строку через разделитель.
`var match ="hello"`
["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"]
результат: "4, 0, 9, 4"*/

window.onload = function(){
    let match ='hello'
    let arr =["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"]
    let str = arr
                        .filter(item => {return item.indexOf(match) >= 0})
                        .reduce((prev,item) => {return (prev + ' ' + item.indexOf(match) + ', ')}, '')
                        .slice(0,-2)
    console.log(str);
}



