import * as actionType from "./../../units/actions.type";
import * as initState from "../state/game.init";

import { getClones } from "./../actions/createClone.action";
// import { getAgedClone } from "./../actions/createAgedClone.action";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case actionType.GAME.CREATE_CLONE:
			return {
				...state,
				clones: getClones(state.clones, state.clonesPerClick)
			};
		// case reducerType.GAME.CREATE_AGED_CLONE:
		// 	return {
		// 		...state,
		// 		agedClones: getAgedClone(state.agedClones, action.agedCloneName)
		// 	};
		default:
			return state;
	}
};

export default game;