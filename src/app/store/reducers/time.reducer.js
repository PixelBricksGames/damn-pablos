import * as actionType from "../../units/actions.type";
import * as initState from "../state/time.init";
import * as Utils from "../../utils/utils";
import { TIME } from "../../units/constants";

const time = (state = initState.time, action) => {
	switch (action.type) {
		case actionType.TIME.UPDATE.TOTAL:
			return {
				...state,
				total: Utils.fixAddition(state.total, TIME.DELTA)
			};
		case actionType.TIME.UPDATE.SEC:
			return {
				...state,
				sec: Utils.fixAddition(state.sec, TIME.DELTA)
			};
		case actionType.TIME.UPDATE.DEC:
			return {
				...state,
				dec: Utils.fixAddition(state.dec, TIME.DELTA)
			};
		case actionType.TIME.CLEAR.SEC:
			return {
				...state,
				sec: 0
			};
		case actionType.TIME.CLEAR.DEC:
			return {
				...state,
				dec: 0
			};
		default:
			return state;
	}
};

export default time;