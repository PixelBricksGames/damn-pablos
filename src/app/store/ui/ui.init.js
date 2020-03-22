import * as SavedStore from "../saved-store";

const init = {
	open: false,
	notifications: false,
	pages: {
		clones: {
			open: false,
			notifications: false
		},
		tools: {
			open: true,
			notifications: false
		},
		upgrades: {
			open: false,
			notifications: false
		},
		achievements: {
			open: false,
			notifications: false
		},
		stats: {
			open: false,
			notifications: false
		},
		config: {
			open: false,
			notifications: false
		},
		credits: {
			open: false,
			notifications: false
		},
	}
};

export const ui = SavedStore.getSavedState("ui", init);