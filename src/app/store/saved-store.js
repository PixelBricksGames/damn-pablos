import { GAME } from "../units/constants";

const savedStore = JSON.parse(localStorage.getItem(GAME.SAVE_NAME));

export const getSavedState = (key, init) => {
	return savedStore ? savedStore[key] : init;
}

export const getSavedClonesState = (key, init) => {
	console.log('savedStore', savedStore);
	console.log(key, savedStore.clones[key]);
	return savedStore && savedStore.clones ? savedStore.clones[key] : init;
}