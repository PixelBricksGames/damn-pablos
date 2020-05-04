import * as SavedStore from "../saved-store";

const init = {
	autoClone: {
		id: "autoClone",
		amount: 0,
		unlocked: false,
		cost: {
			clones: 0,
			money: 100,
			agingSerum: 0,
			angerSerum: 0,
			chaosSerum: 0,
		},
		increment: {
			cost: 1.01,
			perSecond: 0.1
		},
	},
};

export const tools = SavedStore.getSavedState("tools", init);