import * as actionType from "./../../units/actions.type";
import * as initState from "../state/aged-clones.init";

import { getAgedClone } from "./../actions/createAgedClone.action";

const agedClones = (state = initState.agedClones, action) => {
	switch (action.type) {
		case actionType.GAME.CREATE_AGED_CLONE:
			return {
				...state,
				agedClones: getAgedClone(state.agedClones, action.agedCloneName)
			};
		default:
			return state;
	}
};

export default agedClones;