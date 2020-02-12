import * as actionType from "../../units/actions.type";
import * as initState from "../state/time.init";
import * as Utils from "../../utils/utils";
import { TIME } from "../../units/constants";

const time = (state = initState.time, action) => {
	switch (action.type) {
		case actionType.TIME.TOTAL.UPDATE:
			return {
				...state,
				total: Utils.fixAddition(state.total, TIME.DELTA)
			};
		case actionType.TIME.SEC.UPDATE:
			return {
				...state,
				sec: Utils.fixAddition(state.sec, TIME.DELTA)
			};
		case actionType.TIME.SEC.CLEAR:
			return {
				...state,
				sec: 0
			};
		case actionType.TIME.DEC.UPDATE:
			return {
				...state,
				dec: Utils.fixAddition(state.dec, TIME.DELTA)
			};
		case actionType.TIME.DEC.CLEAR:
			return {
				...state,
				dec: 0
			};
		default:
			return state;
	}
};

export default time;