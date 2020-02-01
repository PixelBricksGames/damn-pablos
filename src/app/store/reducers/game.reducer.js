import * as actionType from "./../../units/actions.type";
import * as initState from "../state/game.init";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case actionType.GAME.CREATE_CLONE:
			return {
				...state,
				clones: action.clones + action.clonesPerClick
			};
		default:
			return state;
	}
};

export default game;