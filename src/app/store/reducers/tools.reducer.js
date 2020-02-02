import * as actionType from "./../../units/actions.type";
import * as initState from "../state/tools.init";

import { TOOLS } from "./../../units/constants";

const tools = (state = initState.tools, action) => {
	switch (action.type) {
		case actionType.TOOLS.CREATE_AUTO_CLONE:
			return {
				...state,
				autoClone: getToolState(state, TOOLS.AUTO_CLONE)
			};
		case actionType.TOOLS.CREATE_AUTO_SERUM:
			return {
				...state,
				autoSerum: getToolState(state, TOOLS.AUTO_SERUM)
			};
		default:
			return state;
	}
};

const getToolState = (state, tool) => {
	const newTool = state[tool];
	newTool.units = state[tool].units + 1;
	newTool.price = state[tool].units + state[tool].price
	return newTool;
}

export default tools;