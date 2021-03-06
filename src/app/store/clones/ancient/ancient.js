import * as SavedStore from "../../saved-store";

const init = {
	id: "ancient",
	amount: 0,
	unlocked: {
		clone: false,
		sell: false,
		serum: false,
	},
	cost: {
		clones: 0,
		money: 0,
		agingSerum: 0,
		angerSerum: 0,
		chaosSerum: 0,
	},
	income: {
		money: 0,
		agingSerum: 0.1,
		angerSerum: 0,
		chaosSerum: 0,
	},
	increment: {
		cost: 0,
		clonesPerSecond: 0
	},
	risk: {
		rebellion: 0,
		mutation: 0
	}
};

export const ancient = SavedStore.getSavedClonesState(init.id, init);