import * as initState from "./game.init";
import * as actionType from "./game.type";
import { getTwoDecimals } from "../../utils/utils";
import { RESOURCES } from "../../units/constants";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case actionType.GAME.ENERGY.GENERATE:
			return {
				...state,
				resources: incrementResource(RESOURCES.ENERGY, state.resources, action.energy)
			};

		default:
			return state;
	}
};

const incrementResource = (resource, state, amount) => (
	{
		...state,
		[resource]: {
			...state[resource],
			total: getTwoDecimals(state[resource].total + amount)
		}
	}
);

const decrementResource = (resource, state, amount) => (
	{
		...state,
		[resource]: {
			...state[resource],
			total: getTwoDecimals(state[resource].total - amount)
		}
	}
);

const useResource = (resource, state, amount) => (
	{
		...state,
		[resource]: {
			...state[resource],
			used: getTwoDecimals(state[resource].total + amount)
		}
	}
);

const freeResource = (resource, state, amount) => (
	{
		...state,
		[resource]: {
			...state[resource],
			used: getTwoDecimals(state[resource].total - amount)
		}
	}
);

export default game;