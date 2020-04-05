import { GAME } from "../units/constants";

const savedStore = JSON.parse(localStorage.getItem(GAME.SAVE_NAME));

export const getSavedState = (key, init) => {
	return savedStore ? savedStore[key] : init;
}

export const getSavedClonesState = (key, init) => {
	return savedStore && savedStore.clones ? savedStore.clones[key] : init;
}