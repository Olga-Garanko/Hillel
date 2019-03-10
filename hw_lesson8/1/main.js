/*Домашнее задание 18
#1
Создать массив объектов. В каждом объекте должа содержаться информация о человеке: имя, пол, год рождения. Объектов должно быть 5-10.
+ посчитать средний возраст
+ определить представителей какого пола больше
+ вывести ответы в консоль*/
var person = [
	{
		name: 'Kris00',
		sex: 'M',
		birth: 1999
	},
	{
		name: 'Kris01',
		sex: 'M',
		birth: 2004
	},
	{
		name: 'Kris02',
		sex: 'F',
		birth: 2000
	},
	{
		name: 'Kris03',
		sex: 'M',
		birth: 1980
	},
	{
		name: 'Kris04',
		sex: 'F',
		birth: 1999
	},
	{
		name: 'Kris05',
		sex: 'M',
		birth: 1980
	},
	{
		name: 'Kris06',
		sex: 'F',
		birth: 2004
	},
]
function agesSum(person) {
	let today = new Date()
	let year = today.getFullYear()
	let sum = 0
	person.forEach((item) => {
		let age = year - +item.birth
		console.log(age)
		sum+= age
	})
	return sum
}
function sex(person) {
	let womenCounter = 0, menCounter  = 0;
	person.forEach((item) => {
		(item.sex === 'M') ? menCounter++ : womenCounter++
		if (womenCounter > menCounter) { console.log('В массиве больше женщин') }
		else if ( womenCounter < menCounter ) { console.log('В массиве больше мужчин') }
		else console.log('Женщин and мужчин поровну')
	})
}
console.log(person)
console.log('Сумма возрастов', agesSum(person))
console.log(sex(person))

