do {
	a = +prompt('Введите число a!', 0)
} while ((isNaN(a)) || a==0);

do {
	b = +prompt('Введите число b!', 0)
} while ((isNaN(b)) || a>b);

do {
	h = parseInt(prompt('Введите число h!', 0))
} while (isNaN(h));

for (i=a, sum=0; i <= b; i=i+h){
	for (j=1, fact=1; j <= i; j++){
		fact = fact*j;
	}
	console.log(fact);
	sum = sum + fact;
}
console.log(sum);