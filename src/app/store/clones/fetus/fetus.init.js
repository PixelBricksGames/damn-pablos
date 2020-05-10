import * as SavedStore from "../../saved-store";

const init = {
	id: "fetus",
	amount: 0,
	perClick: 1,
	perSecond: 0,
	unlocked: {
		clone: true,
		sell: false,
		serum: false,
	},
	cost: {
		room: 1,
		energy: 0,
		clones: 0,
		money: 0,
		agingSerum: 0,
		angerSerum: 0,
		chaosSerum: 0,
	},
	income: {
		room: 0,
		energy: 1,
		money: 10,
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

export const fetus = SavedStore.getSavedState(init.id, init);