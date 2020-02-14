import * as actionType from "./../../units/actions.type";
import * as initState from "../state/game.init";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case actionType.GAME.CLONES.UPDATE_CPS:
			return {
				...state,
				clones: {
					...state.clones,
					perSecond: action.perSecond
				}
			};

		case actionType.GAME.CLONES.UPDATE:
			return {
				...state,
				currency: {
					...state.currency,
					clones: action.clones
				}
			};

		case actionType.GAME.MONEY.EARN:
			return {
				...state,
				currency: {
					...state.currency,
					money: state.currency.money + action.money
				}
			};
		case actionType.GAME.MONEY.SPEND:
			return {
				...state,
				currency: {
					...state.currency,
					money: state.currency.money - action.money
				}
			};

		default:
			return state;
	}
};

export default game;