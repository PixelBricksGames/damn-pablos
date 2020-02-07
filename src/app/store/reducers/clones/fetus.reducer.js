import * as initState from "./../../state/clones.init";
import * as actionType from "./../../../units/actions.type";
import * as Utils from "./../../../utils/utils";

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
			return getKilledCloneState(state, action.clones);
		default:
			return state;
	}
};

const getCreatedCloneState = (state, clonesToAdd = 1) => ({
	...state,
	amount: state.amount + clonesToAdd,
	cost: {
		...state.cost,
		clones: Utils.getIncrementalCost(state, "clones")
	}
});

const getKilledCloneState = (state, clonesToSub = 1) => ({
	...state,
	amount: state.amount - clonesToSub
});

export default fetus;