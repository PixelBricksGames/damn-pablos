import { combineReducers } from "redux-immutable";

import game from "./reducers/game.reducer";
import tools from "./reducers/tools.reducer";
import clones from "./reducers/clones.reducer";
import time from "./reducers/time.reducer";
import config from "./reducers/config.reducer";
import stats from "./reducers/stats.reducer";
import ui from "./reducers/ui.reducer";

const rootReducer = combineReducers({
	game,
	tools,
	clones,
	time,
	config,
	stats,
	ui
});

export default rootReducer;