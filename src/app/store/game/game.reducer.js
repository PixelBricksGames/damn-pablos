import * as initState from "./game.init";
import * as actionType from "./game.type";
import { getTwoDecimals } from "../../utils/utils";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case actionType.GAME.ROOM.USE:
			return {
				...state,
				resources: {
					...state.resources,
					room: getTwoDecimals(state.resources.room.used - action.room)
				}
			};

		case actionType.GAME.ROOM.FREE:
			return {
				...state,
				resources: {
					...state.resources,
					room: getTwoDecimals(state.resources.room.used + action.room)
				}
			};

		case actionType.GAME.ROOM.BUY:
			return {
				...state,
				resources: {
					...state.resources,
					room: getTwoDecimals(state.resources.room.total + action.room)
				}
			};

		case actionType.GAME.ENERGY.USE:
			return {
				...state,
				resources: {
					...state.resources,
					energy: getTwoDecimals(state.resources.energy.used - action.energy)
				}
			};

		case actionType.GAME.ENERGY.FREE:
			return {
				...state,
				resources: {
					...state.resources,
					energy: getTwoDecimals(state.resources.energy.used + action.energy)
				}
			};

		case actionType.GAME.ENERGY.GENERATE:
			return {
				...state,
				resources: {
					...state.resources,
					energy: action.energy
				}
			};

		default:
			return state;
	}
};

export default game;