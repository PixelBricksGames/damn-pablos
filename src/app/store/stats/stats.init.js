import * as SavedStore from "../saved-store";

const init = {
	time: {
		inTotal: 0
	},
	outbreaks: {
		inTotal: 0
	},
	clones: {
		byClick: 0,
		inTotal: 0,
		killed: 0,
		sold: 0
	},
	money: {
		inTotal: 0,
		spend: 0
	},
	agingSerum: {
		inTotal: 0,
		spend: 0
	},
	angerSerum: {
		inTotal: 0,
		spend: 0
	},
	chaosSerum: {
		inTotal: 0,
		spend: 0
	}
};

export const stats = SavedStore.getSavedState("stats", init);