import { combineReducers } from "redux-immutable";

import game from "./reducers/game.reducer";
import tools from "./reducers/tools.reducer";
import clones from "./reducers/clones.reducer";
import configuration from "./reducers/configuration.reducer";
import time from "./reducers/time.reducer";

const rootReducer = combineReducers({
	game,
	tools,
	clones,
	configuration,
	time
});

export default rootReducer;