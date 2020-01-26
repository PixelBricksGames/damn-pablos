import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case reducerType.GAME.CLICK_CLONE:
			return {
				...state,
				clones: action.game.clones
			};
		default:
			return state;
	}
};

export default game;