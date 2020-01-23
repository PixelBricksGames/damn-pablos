export const increaseCounter = counter => {
	return {
		type: "INCREASE",
		game: {
			counter: counter + 1
		}
	};
};