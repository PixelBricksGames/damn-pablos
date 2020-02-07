export const fixAddition = (number1, number2) => {
	return Math.round((number1 + number2) * 1e12) / 1e12;
};

export const fixSubstraction = (number1, number2) => {
	return Math.round((number1 - number2) * 1e12) / 1e12;
};

export const fixMultiplier = (number1, number2) => {
	return Math.round((number1 * number2) * 1e12) / 1e12;
};

export const getIncrementalCost = (item, currency) => {
	return parseInt(item.cost[currency] + ((item.amount + 1) * item.increment.cost), 10)
}