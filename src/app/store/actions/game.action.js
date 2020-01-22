export const increaseCounter = counter => {
	const newGame = {
		type: "INCREASE",
		game: {
			counter: counter + 1
		}
	};
	return newGame;
};