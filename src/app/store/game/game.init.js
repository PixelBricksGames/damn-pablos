import * as SavedStore from "../saved-store";

const init = {
	outbreak: false,
	clones: {
		perClick: 1,
		perSecond: 0
	},
	money: {
		perClick: 1,
		perSecond: 0
	},
	serum: {
		perClick: 1,
		perSecond: 0
	},
	currency: {
		clones: 0,
		money: 0,
		agingSerum: 0,
		angerSerum: 0,
		chaosSerum: 0,
	},
	risk: {
		rebellion: 0,
		mutation: 0
	},
};

export const game = SavedStore.getSavedState("game", init);