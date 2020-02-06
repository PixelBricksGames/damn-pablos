import * as actionType from "./../../units/actions.type";
import * as initState from "../state/tools.init";

import { TOOLS } from "./../../units/constants";

const tools = (state = initState.tools, action) => {
	switch (action.type) {
		case actionType.TOOLS.CREATE.AUTO_CLONE:
			return getToolsState(state, TOOLS.AUTO_CLONE);

		case actionType.TOOLS.CREATE.AUTO_SERUM:
			return  getToolsState(state, TOOLS.AUTO_SERUM);
		default:
			return state;
	}
};

const getToolsState = (state, tool) => ({
	...state,
	[tool]: {
		...state[tool],
		amount: state[tool].amount + 1
	}
});

export default tools;