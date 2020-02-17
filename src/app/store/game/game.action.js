import * as actionType from "./game.type";

export const updateClonesPerSecond = (perSecond) => ({
	type: actionType.GAME.CLONES.UPDATE_CPS,
	perSecond
});

export const updateCurrencyClones = (clones) => ({
	type: actionType.GAME.CLONES.UPDATE,
	clones
});

export const earnClones = (clones) => ({
	type: actionType.GAME.CLONES.EARN,
	clones
});

export const spendClones = (clones) => ({
	type: actionType.GAME.CLONES.SPEND,
	clones
});

export const earnMoney = (money) => ({
	type: actionType.GAME.MONEY.EARN,
	money
});

export const spendMoney = (money) => ({
	type: actionType.GAME.MONEY.SPEND,
	money
});

export const earnAgingSerum = (serum) => ({
	type: actionType.GAME.AGING_SERUM.EARN,
	clones
});

export const spendAgingSerum = (serum) => ({
	type: actionType.GAME.AGING_SERUM.SPEND,
	clones
});

export const earnAngerSerum = (serum) => ({
	type: actionType.GAME.ANGER_SERUM.EARN,
	clones
});

export const spendAngerSerum = (serum) => ({
	type: actionType.GAME.ANGER_SERUM.SPEND,
	clones
});

export const earnChaosSerum = (serum) => ({
	type: actionType.GAME.CHAOS_SERUM.EARN,
	clones
});

export const spendChaosSerum = (serum) => ({
	type: actionType.GAME.CHAOS_SERUM.SPEND,
	clones
});