// Домашнее задание 13
// #3
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

str = "Hello World";
symb = ['o', 'd'];
console.log(str, symb);
function newString(str, symb){
	for (i = 0; i < symb.length; i++) {
		if (str.indexOf(symb[i]) != -1) {
			regExpress = symb[i] + "/g";
			console.log(regExpress);
			newStr = str.replace(regExpress,'');
		}
	}
	return newStr;
}

console.log(newString(str, symb));
