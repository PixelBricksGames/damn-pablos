export const fixAddition = (number1, number2) => {
	return Math.round((number1 + number2) * 1e12) / 1e12;
};

export const fixSubstraction = (number1, number2) => {
	return Math.round((number1 - number2) * 1e12) / 1e12;
};

export const fixMultiplier = (number1, number2) => {
	return Math.round((number1 * number2) * 1e12) / 1e12;
};