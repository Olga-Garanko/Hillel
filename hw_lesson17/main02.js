/* написать код, который сформирует 2 запроса за различными файлам json. (data.json, data2.json). В файлах лежат массивы подобные по структуре. Склеить 2 массива и вывести результат в консоль*/

let result = []
let ajaxQuery = new Promise(function(resolve, reject){
	let xhr = new XMLHttpRequest()
	xhr.open('GET', '/data.json', true)
	xhr.send()
	xhr.addEventListener('readystatechange', function(){
	    if (xhr.readyState != 4) return
		result = JSON.parse(xhr.responseText)

		let xhr1 = new XMLHttpRequest()
		xhr1.open('GET', '/data2.json', true)
		xhr1.send()
		xhr1.addEventListener('readystatechange', function(){
		    if (xhr1.readyState != 4) return
		    result = result.concat(JSON.parse(xhr1.responseText))	
			resolve(result)
		})
	})
}).then(result => console.log(result))