import * as SavedStore from "../saved-store";

const init = {
	outbreak: false,
	clones: {
		perClick: 1,
		perSecond: 0
	},
	resources: {
		room: {
			used: 0,
			total: 10
		},
		energy: {
			used: 0,
			total: 10
		},
	},
	risk: {
		rebellion: 0,
		mutation: 0
	},
};

export const game = SavedStore.getSavedState("game", init);