import * as actionType from "./../../units/actions.type";
import * as initState from "../state/game.init";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case actionType.GAME.UPDATE.GAME:
			return action.state;
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
		case actionType.GAME.UPDATE.CLONES_PER_SECOND:
			return {
				...state,
				clonesPerSecond: action.clonesPerSecond
			};
		default:
			return state;
	}
};

export default game;