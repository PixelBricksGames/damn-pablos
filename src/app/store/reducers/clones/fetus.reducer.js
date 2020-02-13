import * as initState from "./../../state/clones/fetus.init";
import * as actionType from "./../../../units/actions.type";
import * as Utils from "./../../../utils/utils";

const fetus = (state = initState.fetus, action) => {
	switch (action.type) {
		case actionType.CLONES.FETUS.UNLOCK.CLONE:
			return getUnlockedCloneState(state, "clone");

		case actionType.CLONES.FETUS.UNLOCK.SELL:
			return getUnlockedCloneState(state, "sell");

		case actionType.CLONES.FETUS.UNLOCK.SERUM:
			return getUnlockedCloneState(state, "serum");

		case actionType.CLONES.FETUS.CREATE:
			return getCreatedCloneState(state, action.clones);

		case actionType.CLONES.FETUS.KILL:
			return getKilledCloneState(state, action.clones);

		default:
			return state;
	}
};

const getUnlockedCloneState = (state, action) => ({
	...state,
	unlock: {
		...state.unlock,
		[action]: true
	}
});

const getCreatedCloneState = (state, clonesToAdd = 1) => ({
	...state,
	amount: state.amount + clonesToAdd,
	cost: {
		...state.cost,
		clones: Utils.getIncrementalCost(state.cost.clones, (state.amount + clonesToAdd), state.increment.cost)
	}
});

const getKilledCloneState = (state, clonesToSub = 1) => ({
	...state,
	amount: state.amount - clonesToSub
});

export default fetus;