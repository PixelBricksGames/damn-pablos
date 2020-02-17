import * as actionType from "./stats.type";

export const addTime = (time) => ({
	type: actionType.STATS.TIME.ADD_IN_TOTAL,
	time
});

export const addOutbreaks = (outbreaks) => ({
	type: actionType.STATS.OUTBREAKS.ADD_IN_TOTAL,
	outbreaks
});

export const addClonesByClick = (clones) => ({
	type: actionType.STATS.CLONES.ADD_BY_CLICK,
	clones
});

export const addClonesInTotal = (clones) => ({
	type: actionType.STATS.CLONES.ADD_IN_TOTAL,
	clones
});

export const addClonesKilled = (clones) => ({
	type: actionType.STATS.CLONES.ADD_KILLED,
	clones
});

export const addClonesSold = (clones) => ({
	type: actionType.STATS.CLONES.ADD_SOLD,
	clones
});

export const addMoneyInTotal = (money) => ({
	type: actionType.STATS.MONEY.ADD_IN_TOTAL,
	money
});

export const addMoneySpend = (money) => ({
	type: actionType.STATS.MONEY.ADD_SPEND,
	money
});

export const addAgingSerumInTotal = (agingSerum) => ({
	type: actionType.STATS.AGING_SERUM.ADD_IN_TOTAL,
	agingSerum
});

export const addAgingSerumSpend = (agingSerum) => ({
	type: actionType.STATS.AGING_SERUM.ADD_SPEND,
	agingSerum
});

export const addAngerSerumInTotal = (angerSerum) => ({
	type: actionType.STATS.ANGER_SERUM.ADD_IN_TOTAL,
	angerSerum
});

export const addAngerSerumSpend = (angerSerum) => ({
	type: actionType.STATS.ANGER_SERUM.ADD_SPEND,
	angerSerum
});

export const addChaosSerumInTotal = (chaosSerum) => ({
	type: actionType.STATS.CHAOS_SERUM.ADD_IN_TOTAL,
	chaosSerum
});

export const addChaosSerumSpend = (chaosSerum) => ({
	type: actionType.STATS.CHAOS_SERUM.ADD_SPEND,
	chaosSerum
});