import * as actionType from "./../../units/actions.type";
import * as initState from "../state/aged-clones.init";

import { AGED_CLONES } from "./../../units/constants";

const agedClones = (state = initState.agedClones, action) => {
	switch (action.type) {
		case actionType.AGED_CLONES.CREATE.FETUS:
			return {
				...state,
				child: getAgedCloneState(state, AGED_CLONES.CHILD)
			};
		case actionType.AGED_CLONES.CREATE.FETUSCHILD:
			return {
				...state,
				child: getAgedCloneState(state, AGED_CLONES.CHILD)
			};
		case actionType.AGED_CLONES.CREATE.FETUSTEEN:
			return {
				...state,
				teen: getAgedCloneState(state, AGED_CLONES.TEEN)
			};
		case actionType.AGED_CLONES.CREATE.FETUSADULT:
			return {
				...state,
				adult: getAgedCloneState(state, AGED_CLONES.ADULT)
			};
		case actionType.AGED_CLONES.CREATE.FETUSSENIOR:
			return {
				...state,
				senior: getAgedCloneState(state, AGED_CLONES.SENIOR)
			};
		case actionType.AGED_CLONES.CREATE.FETUSANCIENT:
			return {
				...state,
				ancient: getAgedCloneState(state, AGED_CLONES.ANCIENT)
			};
		default:
			return state;
	}
};

export default agedClones;

const getAgedCloneState = (state, agedClone) => {
	const newAgedClone = state[agedClone];
	newAgedClone.units = state[agedClone].units + 1;
	newAgedClone.price = state[agedClone].units + state[agedClone].price
	return newAgedClone;
}