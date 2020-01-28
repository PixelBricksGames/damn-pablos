import * as reducerType from "../../units/reducer.type";

export const createAgedClone = (agedCloneName) => ({
	type: reducerType.GAME.CREATE_AGED_CLONE,
	agedCloneName
});

export const getAgedClone = (agedClones, agedCloneName) => ({
	...agedClones,
	[agedCloneName]: {
		...[agedCloneName],
		units: agedClones[agedCloneName].units + 1
	}
});