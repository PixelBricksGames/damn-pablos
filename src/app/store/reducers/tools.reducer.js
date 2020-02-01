import * as actionType from "./../../units/actions.type";
import * as initState from "../state/tools.init";

import { TOOLS } from "./../../units/constants";

const tools = (state = initState.tools, action) => {
	switch (action.type) {
		case actionType.TOOLS.CREATE_CRONJOB:
			return {
				...state,
				cronjob: getToolState(state, TOOLS.CRONJOB)
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