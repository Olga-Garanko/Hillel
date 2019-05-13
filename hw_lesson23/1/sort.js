import {render} from './render.js'
export let sortByName = (arr) => {
	arr.sort((a,b) => {
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		return 0;
	});
	render(arr);
}

export let sortByPrice = (arr) => {
	arr.sort((a,b) => {
		if (a.price > b.price) {
			return 1;
		}
		if (a.price < b.price) {
			return -1;
		}
		return 0;
	});
	render(arr);
}