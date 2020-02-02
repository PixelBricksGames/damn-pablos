import * as actionType from "../../units/actions.type";
import * as initState from "../state/time.init";

const time = (state = initState.time, action) => {
	switch (action.type) {
		case actionType.TIME.UPDATE:
			return {
				...state,
				miliseconds: fixJSAddition(state.miliseconds, action.miliseconds)
			};
		default:
			return state;
	}
};

const fixJSAddition = (miliseconds1, miliseconds2) => {
	return ((miliseconds1 * 1000) + (miliseconds2 * 1000)) / 1000;
};

export default time;