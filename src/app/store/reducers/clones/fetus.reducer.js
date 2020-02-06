import * as actionType from "./../../../units/actions.type";
import * as initState from "./../../state/clones.init";

const fetus = (state = initState.clones.fetus, action) => {
	switch (action.type) {
		case actionType.CLONES.CREATE.FETUS:
			return getCreatedCloneState(state, action.clones);

		case actionType.CLONES.SERUM.FETUS:
			return {
				...state
			};
		case actionType.CLONES.SELL.FETUS:
			return {
				...state
			};
		case actionType.CLONES.KILL.FETUS:
			return {
				...state
			};
		default:
			return state;
	}
};

const getCreatedCloneState = (state, clonesToAdd = 1) => ({
	...state,
	amount: state.amount + clonesToAdd,
	cost: {
		...state.cost,
		clones: state.amount * state.increment.cost
	}
});

export default fetus;