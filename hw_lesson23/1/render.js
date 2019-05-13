export let render = (data) => {
	let listExist = document.querySelector('ul');
	let list;
	if (!listExist) {
		list = document.createElement('ul');
	} else { list = listExist }
	let listItemsStr = ""; 
	data.forEach((item, i) => {
		listItemsStr+= `<li>${item.name} - ${item.price}</li>`;	
	})
	list.innerHTML = listItemsStr;
	document.body.appendChild(list);
}