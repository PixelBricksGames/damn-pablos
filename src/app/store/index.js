import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { enableBatching } from 'redux-batched-actions';

import game from "./game/game.reducer";
import time from "./time/time.reducer";
import ui from "./ui/ui.reducer";
import clones from "./clones/clones.reducer";
import tools from "./tools/tools.reducer";
import stats from "./stats/stats.reducer";
import config from "./config/config.reducer";
import animations from "./animations/animations.reducer";

const rootReducer = combineReducers({
	game,
	tools,
	clones,
	time,
	config,
	stats,
	ui,
	animations
});

const store = createStore(
	enableBatching(rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;