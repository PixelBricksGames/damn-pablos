import * as SavedStore from "../saved-store";

const init = {
	language: 'ENG'
};

export const config = SavedStore.getSavedState("config", init);