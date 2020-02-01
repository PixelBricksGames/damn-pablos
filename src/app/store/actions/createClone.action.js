import * as actionType from "../../units/actions.type";

export const createClone = () => ({
	type: actionType.GAME.CREATE_CLONE
});

export const getClones = (counter, increase) => (
	counter + increase
);