import * as actionType from "../../units/actions.type";

export const updateClones = (clones) => ({
	type: actionType.GAME.CLONES.UPDATE,
	clones
});

export const updateClonesPerSecond = (clonesPerSecond) => ({
	type: actionType.GAME.UPDATE_CPS,
	clonesPerSecond
});

export const earnMoney = (money) => ({
	type: actionType.GAME.MONEY.EARN,
	money
});

export const spenMoney = (money) => ({
	type: actionType.GAME.MONEY.SPEND,
	money
});