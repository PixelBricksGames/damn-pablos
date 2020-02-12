import * as actionType from "./../../../units/actions.type";

export const unlockCloneFetus = () => ({
	type: actionType.CLONES.FETUS.UNLOCK.CLONE
});

export const unlockSellFetus = () => ({
	type: actionType.CLONES.FETUS.UNLOCK.SELL
});

export const unlockSerumFetus = () => ({
	type: actionType.CLONES.FETUS.UNLOCK.SERUM
});

export const createFetusClone = (clones) => ({
	type: actionType.CLONES.FETUS.CREATE,
	clones
});

export const killFetusClone = (clones) => ({
	type: actionType.CLONES.FETUS.KILL,
	clones
});

export const sellFetusClone = () => ({
	type: actionType.CLONES.FETUS.SELL,
});

export const serumFetusClone = () => ({
	type: actionType.CLONES.FETUS.SERUM,
});
