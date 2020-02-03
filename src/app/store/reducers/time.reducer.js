import * as actionType from "../../units/actions.type";
import * as initState from "../state/time.init";
import * as Utils from "../../utils/utils";
import { TIME } from "../../units/constants";

const time = (state = initState.time, action) => {
	switch (action.type) {
		case actionType.TIME.UPDATE:
			return {
				...state,
				seconds: Utils.fixJSAddition(state.seconds, TIME.DELTA)
			};
		case actionType.TIME.UPDATE_PARTIAL_SECONDS:
			return {
				...state,
				partialSeconds: Utils.fixJSAddition(state.partialSeconds, TIME.DELTA)
			};
		case actionType.TIME.CLEAR_PARTIAL_SECONDS:
			return {
				...state,
				partialSeconds: 0
			};
		default:
			return state;
	}
};

export default time;