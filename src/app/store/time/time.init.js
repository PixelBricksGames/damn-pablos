import * as SavedStore from "../saved-store";

const init = {
	total: 0,
	sec: 0,
	dec: 0
};

export const time = SavedStore.getSavedState("time", init);