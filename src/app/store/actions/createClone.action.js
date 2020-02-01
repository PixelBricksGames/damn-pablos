import * as actionType from "../../units/actions.type";

export const createClone = (clones, clonesPerClick) => ({
	type: actionType.GAME.CREATE_CLONE,
	clones,
	clonesPerClick
});