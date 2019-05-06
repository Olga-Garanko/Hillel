const rate = {
	UAH: 2.5,
	USD: 1.5,
	GBP: 0.5,
	EUR: 2.5
}
export const convert = (e,i) => {
	return rate[i];
}