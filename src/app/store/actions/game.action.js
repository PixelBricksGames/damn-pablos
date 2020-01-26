import * as reducerType from "./../../units/reducer.type";

export const increaseCounter = (counter, increase) => ({
	type: reducerType.GAME.CLICK_CLONE,
	game: {
		clones: counter + increase
	}
});