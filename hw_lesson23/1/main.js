import {render} from './render.js'
import {getData} from './fetch.js'
import {sortByName, sortByPrice} from './sort.js'

 let res;
 getData('./goods.json')
	.then(function(data) {
        res = data
    }).then(function(data) {
        render(res);
    })

let sortButtonByName = document.querySelector('#name')
sortButtonByName.addEventListener('click', () => {sortByName(res)})
let sortButtonByPrice = document.querySelector('#price')
sortButtonByPrice.addEventListener('click', () => {sortByPrice(res)})