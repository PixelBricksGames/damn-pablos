export const fixAddition = (number1, number2) => {
	// return Math.round((number1 + number2) * 1e12) / 1e12;
	return getTwoDecimals(number1 + number2);
};

export const fixSubstraction = (number1, number2) => {
	return getTwoDecimals(number1 - number2);
};

export const fixMultiplier = (number1, number2) => {
	return getTwoDecimals(number1 * number2);
};

export const getIncrementalCost = (cost, amount, increment) => {
	return parseInt((cost + amount * increment), 10)
}

export const getTwoDecimals = (number) => {
	return Math.round((number + Number.EPSILON) * 100) / 100;
}