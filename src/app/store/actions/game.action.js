import * as actionType from "../../units/actions.type";

export const createClones = (clones, clonesPerClick) => ({
	type: actionType.GAME.CREATE_CLONES,
	clones,
	clonesPerClick
});

export const deleteClones = (clones) => ({
	type: actionType.GAME.DELETE_CLONES,
	clones
});