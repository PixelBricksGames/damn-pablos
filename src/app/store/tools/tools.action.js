import * as actionType from "./tools.type";

// AutoClone
export const unlockAutoClone = () => ({
	type: actionType.TOOLS.AUTO_CLONE.UNLOCK
});

export const createAutoClone = () => ({
	type: actionType.TOOLS.AUTO_CLONE.CREATE
});

export const deleteAutoClone = () => ({
	type: actionType.TOOLS.AUTO_CLONE.DELETE
});

// AutoSell
export const unlockAutoSell = () => ({
	type: actionType.TOOLS.AUTO_SELL.UNLOCK
});

export const createAutoSell = () => ({
	type: actionType.TOOLS.AUTO_SELL.CREATE
});

export const deleteAutoSell = () => ({
	type: actionType.TOOLS.AUTO_SELL.DELETE
});

// AutoSerum
export const unlockAutoSerum = () => ({
	type: actionType.TOOLS.AUTO_SERUM.UNLOCK
});

export const createAutoSerum = () => ({
	type: actionType.TOOLS.AUTO_SERUM.CREATE
});

export const deleteAutoSerum = () => ({
	type: actionType.TOOLS.AUTO_SERUM.DELETE
});
