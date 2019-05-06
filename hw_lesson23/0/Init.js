import {currency} from './currency.js'
import {convert} from './rate.js';

console.log(currency);

export const init = () => {
	let list = document.createElement('ul');
	currency.forEach((item, i) => {
		let listItem = document.createElement('li');
		listItem.innerHTML = item;
		let listButton = document.createElement('button');
		listButton.id = "btn" + i;
		listButton.innerHTML = "convert";
		listButton.addEventListener('click', event => rateRender(event,item));
		listItem.appendChild(listButton);
		list.appendChild(listItem);
	})
	let listResult = document.createElement('li');
	listResult.innerHTML = '';
	list.appendChild(listResult);
	document.body.appendChild(list);

	let rateRender = (event,item) => {
		listResult.innerHTML = convert(event,item);
	}
}