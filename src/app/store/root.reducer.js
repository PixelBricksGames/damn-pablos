import { combineReducers } from "redux-immutable";

import game from "./reducers/game.reducer";
import tools from "./reducers/tools.reducer";
import agedClones from "./reducers/aged-clones.reducer";
import specialClones from "./reducers/special-clones.reducer";
import stats from "./reducers/stats.reducer";
import configuration from "./reducers/configuration.reducer";
import time from "./reducers/time.reducer";

const rootReducer = combineReducers({
	game,
	tools,
	agedClones,
	specialClones,
	stats,
	configuration,
	time
});

export default rootReducer;