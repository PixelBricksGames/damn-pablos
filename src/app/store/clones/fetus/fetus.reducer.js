import * as initState from "./fetus.init";
import * as actionType from "./../clones.type";
import * as Utils from "./../../../utils/utils";
import { BUTTONS } from "./../../../units/constants";

const fetus = (state = initState.fetus, action) => {
	switch (action.type) {
		case actionType.CLONES.FETUS.UNLOCK.CLONE:
			return getUnlockedCloneState(state, BUTTONS.CLONE);

		case actionType.CLONES.FETUS.UNLOCK.SELL:
			return getUnlockedCloneState(state, BUTTONS.SELL);

		case actionType.CLONES.FETUS.UNLOCK.SERUM:
			return getUnlockedCloneState(state, BUTTONS.SERUM);

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
	unlocked: {
		...state.unlocked,
		[action]: true
	}
});

const getCreatedCloneState = (state, clonesToAdd = 1) => ({
	...state,
	amount: state.amount + clonesToAdd,
	// cost: {
	// 	...state.cost,
	// 	clones: Utils.getIncrementalCost(state.cost.clones, (state.amount + clonesToAdd), state.increment.cost)
	// }
});

const getKilledCloneState = (state, clonesToSub = 1) => ({
	...state,
	amount: state.amount - clonesToSub
});

export default fetus;