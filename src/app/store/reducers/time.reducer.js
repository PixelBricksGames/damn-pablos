import * as actionType from "../../units/actions.type";
import * as initState from "../state/time.init";

const time = (state = initState.time, action) => {
	switch (action.type) {
		case actionType.TIME.UPDATE:
			console.log("timeReducer: ", action);
			console.log("timeReducer (state): ", state);
			return {
				...state,
				seconds: fixJSAddition(state.seconds, action.seconds)
			};
		default:
			return state;
	}
};

const fixJSAddition = (seconds1, seconds2) => {
	return Math.round((seconds1 + seconds2) * 1e12) / 1e12;
};

export default time;