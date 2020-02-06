import * as actionType from "../../units/actions.type";

export const updateClones = (clones) => ({
	type: actionType.GAME.UPDATE_CLONES,
	clones
});

export const updateClonesPerSecond = (clonesPerSecond) => ({
	type: actionType.GAME.UPDATE_CPS,
	clonesPerSecond
});