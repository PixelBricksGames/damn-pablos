import * as initState from "../state/stats.init";
import * as actionType from "../../units/actions.type";
import * as Utils from "../../utils/utils";

const stats = (state = initState.stats, action) => {
	switch (action.type) {
		case actionType.STATS.TIME.ADD_IN_TOTAL:
			return getStatusStated(state, action, 'time', 'inTotal');

		case actionType.STATS.OUTBREAKS.ADD_IN_TOTAL:
			return getStatusStated(state, action, 'outbreaks', 'inTotal');

		case actionType.STATS.CLONES.ADD_BY_CLICK:
			return getStatusStated(state, action, 'clones', 'byClick');

		case actionType.STATS.CLONES.ADD_IN_TOTAL:
			return getStatusStated(state, action, 'clones', 'inTotal');

		case actionType.STATS.CLONES.ADD_KILLED:
			return getStatusStated(state, action, 'clones', 'killed');

		case actionType.STATS.CLONES.ADD_SOLD:
			return getStatusStated(state, action, 'clones', 'sold');

		case actionType.STATS.MONEY.ADD_IN_TOTAL:
			return getStatusStated(state, action, 'money', 'inTotal');

		case actionType.STATS.MONEY.ADD_SPEND:
			return getStatusStated(state, action, 'money', 'spend');

		case actionType.STATS.AGING_SERUM.ADD_IN_TOTAL:
			return getStatusStated(state, action, 'agingSerum', 'inTotal');

		case actionType.STATS.AGING_SERUM.ADD_SPEND:
			return getStatusStated(state, action, 'agingSerum', 'spend');

		case actionType.STATS.ANGER_SERUM.ADD_IN_TOTAL:
			return getStatusStated(state, action, 'angerSerum', 'inTotal');

		case actionType.STATS.ANGER_SERUM.ADD_SPEND:
			return getStatusStated(state, action, 'angerSerum', 'spend');

		case actionType.STATS.CHAOS_SERUM.ADD_IN_TOTAL:
			return getStatusStated(state, action, 'chaosSerum', 'inTotal');

		case actionType.STATS.CHAOS_SERUM.ADD_SPEND:
			return getStatusStated(state, action, 'chaosSerum', 'spend');

		default:
			return state;
	}
};

const getStatusStated = (state, action, key, property) => ({
	...state,
	[key]: {
		...state[key],
		[property]: Utils.fixAddition(state[key][property], action[key])
	}
});

export default stats;