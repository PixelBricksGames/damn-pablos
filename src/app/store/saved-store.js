import { GAME } from "../units/constants";

const savedStore = JSON.parse(localStorage.getItem(GAME.SAVE_NAME));

export const getSavedState = (key, init) => {
	if(savedStore && savedStore[key]) {
		return sgetValue(init, savedStore[key]);
	} else {
		return init;
	}
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