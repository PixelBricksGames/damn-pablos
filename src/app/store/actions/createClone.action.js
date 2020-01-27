import * as reducerType from "../../units/reducer.type";

export const createClone = () => ({
	type: reducerType.GAME.CREATE_CLONE
});

export const getClones = (counter, increase) => (
	counter + increase
);