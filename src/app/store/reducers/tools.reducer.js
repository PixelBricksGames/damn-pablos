import * as initState from "../state/tools.init";
import * as actionType from "./../../units/actions.type";
import * as Utils from "./../../utils/utils";
import { TOOLS } from "./../../units/constants";

const tools = (state = initState.tools, action) => {
	switch (action.type) {
		case actionType.TOOLS.AUTO_CLONE.UNLOCK:
			return getUnlockToolState(state, TOOLS.AUTO_CLONE);

		case actionType.TOOLS.AUTO_CLONE.CREATE:
			return getCreateToolState(state, TOOLS.AUTO_CLONE);

		case actionType.TOOLS.AUTO_CLONE.DELETE:
			return getDeleteToolState(state, TOOLS.AUTO_CLONE);

		case actionType.TOOLS.AUTO_SELL.UNLOCK:
			return getUnlockToolState(state, TOOLS.AUTO_SELL);

		case actionType.TOOLS.AUTO_SELL.CREATE:
			return getCreateToolState(state, TOOLS.AUTO_SELL);

		case actionType.TOOLS.AUTO_SELL.DELETE:
			return getDeleteToolState(state, TOOLS.AUTO_SELL);

		case actionType.TOOLS.AUTO_SERUM.UNLOCK:
			return getUnlockToolState(state, TOOLS.AUTO_SERUM);

		case actionType.TOOLS.AUTO_SERUM.CREATE:
			return getCreateToolState(state, TOOLS.AUTO_SERUM);

		case actionType.TOOLS.AUTO_SERUM.DELETE:
			return getDeleteToolState(state, TOOLS.AUTO_SERUM);

		default:
			return state;
	}
};

const getUnlockToolState = (state, tool) => {
	return {
		...state,
		[tool]: {
			...state[tool],
			unlock: true
		}
	}
};

const getCreateToolState = (state, tool) => {
	return {
		...state,
		[tool]: {
			...state[tool],
			amount: state[tool].amount + 1,
			cost: Utils.getIncrementalCost(state[tool].cost, state[tool].amount + 1, state[tool].increment.cost)
		}
	}
};

const getDeleteToolState = (state, tool) => {
	return {
		...state,
		[tool]: {
			...state[tool],
			amount: state[tool].amount - 1
		}
	}
};

export default tools;