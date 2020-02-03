export const fixJSAddition = (number1, number2) => {
	return Math.round((number1 + number2) * 1e12) / 1e12;
};

export const fixJSMultiplier = (number1, number2) => {
	return Math.round((number1 * number2) * 1e12) / 1e12;
};