// Домашнее задание 13
// #3
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

str = 'Hello World';
symb = ['o', 'd', 'l'];
console.log(str, symb);
function newString(str, symb){
	for (i = 0; i < symb.length; i++) {
		for (j = 0; j <= str.length; j++) {
			if (str[j] == symb[i]) {
				reg = new RegExp(symb[i], "g");
				str = str.replace(reg,'');
			}
		}
	}
	return str;
}

res = newString(str, symb);
console.log(res);
