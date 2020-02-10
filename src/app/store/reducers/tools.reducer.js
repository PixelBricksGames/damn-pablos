import * as initState from "../state/tools.init";
import * as actionType from "./../../units/actions.type";
import * as Utils from "./../../utils/utils";
import { TOOLS } from "./../../units/constants";

const tools = (state = initState.tools, action) => {
	switch (action.type) {
		case actionType.TOOLS.UNLOCK.AUTO_CLONE:
			return {
				...state,
				autoClone: {
					...state.autoClone,
					unlock: true
				}
			};

		case actionType.TOOLS.CREATE.AUTO_CLONE:
			// return getToolsState(state, TOOLS.AUTO_CLONE);
			return {
				...state,
				autoClone: {
					...state.autoClone,
					amount,
					cost: {
						...state.autoClone.cost,
						money: Utils.getIncrementalCost(state.autoClone, "money")
					}
				}
			};

		default:
			return state;
	}
};

const getToolsState = (state, tool) => {
	return {
		...state,
		[tool]: {
			...state[tool],
			amount: state[tool].amount + 1,
			cost: {
				...state[tool].cost,
				clones: Utils.getIncrementalCost(state[tool], "clones")
			}
		}
	}
};

export default tools;