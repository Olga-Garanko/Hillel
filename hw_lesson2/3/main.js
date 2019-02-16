// Домашнее задание 5
// #3
// Выведите столбец четных чисел в промежутке от 0 до 100. (в document в виде таблицы)

document.write('<h1>Таблица простых чисел</h1>');
document.write('<table>');
isPrime = false;
for (i=1; i <= 100; i++){
	for (j = 2; j <= 9; j++) {
		if ((i%j == 0) && (i != j)) {
			isPrime = false;
			break;
		} else {
			isPrime = true;
		}
	}
	if (isPrime) { document.write('<tr><td>' + i + "</td></tr>"); }
}
document.write('</table>');
