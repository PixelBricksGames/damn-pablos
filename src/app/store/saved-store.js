import { GAME } from "../units/constants";

const savedStore = JSON.parse(localStorage.getItem(GAME.SAVE_NAME));

export const getSavedState = (key, init) => {
	// return savedStore ? savedStore[key] : init;
	return getValue(init, savedStore[key]);
}

export const getSavedClonesState = (key, init) => {
	return savedStore && savedStore.clones ? savedStore.clones[key] : init;
}

const getValue = (initObj, savedObj) => {
	let resultObj = {};
	Object.keys(initObj).forEach((key, index) => {
		if(typeof initObj[key] === 'object') {
			resultObj[key] = getValue(initObj[key], savedObj[key]);
		} else {
			resultObj[key] = savedObj[key] ? savedObj[key] : initObj[key];
		}
	});
	return resultObj;
}