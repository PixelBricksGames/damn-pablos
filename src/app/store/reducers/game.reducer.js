import * as actionType from "./../../units/actions.type";
import * as initState from "../state/game.init";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case actionType.GAME.CREATE_CLONES:
			return {
				...state,
				clones: action.clones + action.clonesPerClick
			};
		case actionType.GAME.DELETE_CLONES:
			return {
				...state,
				clones: state.clones - action.clones
			};
		default:
			return state;
	}
};

export default game;