import * as actionType from "./../../../units/actions.type";

export const createFetusClone = (clones) => ({
	type: actionType.CLONES.CREATE.FETUS,
	clones
});

export const serumFetusClone = () => ({
	type: actionType.CLONES.SERUM.FETUS
});

export const sellFetusClone = () => ({
	type: actionType.CLONES.SELL.FETUS
});

export const killFetusClone = () => ({
	type: actionType.CLONES.KILL.FETUS
});