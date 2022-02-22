import * as initState from "./tools.init";
import * as actionType from "./tools.type";
import * as Utils from "./../../utils/utils";
import { TOOLS } from "./../../units/constants";

const tools = (state = initState.tools, action) => {
	switch (action.type) {
		case actionType.TOOLS.AUTO_CLONE.UNLOCK:
			return getUnlockedToolState(state, TOOLS.AUTO_CLONE);

		case actionType.TOOLS.AUTO_CLONE.CREATE:
			return getCreatedToolState(state, TOOLS.AUTO_CLONE);

		case actionType.TOOLS.AUTO_CLONE.DELETE:
			return getDeletedToolState(state, TOOLS.AUTO_CLONE);

		default:
			return state;
	}
};

const getUnlockedToolState = (state, tool) => {
	return {
		...state,
		[tool]: {
			...state[tool],
			unlocked: true
		}
	}
};

const getCreatedToolState = (state, tool) => {
	return {
		...state,
		[tool]: {
			...state[tool],
			amount: state[tool].amount + 1,
			cost: {
				...state[tool].cost,
				money: Utils.getIncrementalCost(state[tool].cost.money, state[tool].amount + 1, state[tool].increment.cost)
			}
		}
	}
};

const getDeletedToolState = (state, tool) => {
	return {
		...state,
		[tool]: {
			...state[tool],
			amount: state[tool].amount - 1
		}
	}
};

export default tools;