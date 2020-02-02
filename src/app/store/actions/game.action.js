import * as actionType from "../../units/actions.type";

export const updateGame = (state) => {
	console.log(state);
	return {
		type: actionType.GAME.UPDATE.CLONES_PER_SECOND,
		game: {
			clones: 0,
			clonesPerSecond: 0,
			clonesPerClick: 1,
			mutationRisk: 0,
			money: 0,
			serum: 0,
			outbreak: false
		}
	};
};

export const createClones = (clones, clonesPerClick) => ({
	type: actionType.GAME.CREATE_CLONES,
	clones,
	clonesPerClick
});

export const deleteClones = (clones) => ({
	type: actionType.GAME.DELETE_CLONES,
	clones
});

export const updateClonesPerSecond = (clonesPerSecond) => ({
	type: actionType.GAME.UPDATE.CLONES_PER_SECOND,
	clonesPerSecond
});