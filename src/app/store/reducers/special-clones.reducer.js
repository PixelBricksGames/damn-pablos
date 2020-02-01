import * as actionType from "./../../units/actions.type";
import * as initState from "../state/special-clones.init";

import { getAgedClone } from "../actions/createAgedClone.action";

const specialClones = (state = initState.specialClones, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default specialClones;