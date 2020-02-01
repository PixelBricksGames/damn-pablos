import * as actionType from "../../units/actions.type";

export const createAgedClone = (agedCloneName) => ({
	type: actionType.GAME.CREATE_AGED_CLONE,
	agedCloneName
});

export const getAgedClone = (agedClones, agedCloneName) => ({
	...agedClones,
	[agedCloneName]: {
		...[agedCloneName],
		units: agedClones[agedCloneName].units + 1
	}
});