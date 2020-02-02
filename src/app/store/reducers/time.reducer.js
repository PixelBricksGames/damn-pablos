import * as actionType from "../../units/actions.type";
import * as initState from "../state/time.init";

const time = (state = initState.time, action) => {
	switch (action.type) {
		case actionType.TIME.UPDATE:
			return {
				...state,
				miliseconds: action.miliseconds
			};
		default:
			return state;
	}
};

export default time;