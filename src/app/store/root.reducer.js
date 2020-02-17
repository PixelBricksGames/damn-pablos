import { combineReducers } from "redux-immutable";

import game from "./game/game.reducer";
import time from "./time/time.reducer";
import ui from "./ui/ui.reducer";
import clones from "./clones/clones.reducer";
import tools from "./tools/tools.reducer";
import stats from "./stats/stats.reducer";
import config from "./config/config.reducer";

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