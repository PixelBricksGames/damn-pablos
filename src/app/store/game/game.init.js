import * as SavedStore from "../saved-store";

const init = {
	resources: {
		energy: {
			used: 0,
			total: 0
		},
		room: {
			used: 0,
			total: 10
		},
	},
};

export const game = SavedStore.getSavedState("game", init);