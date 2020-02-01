import { combineReducers } from "redux-immutable";

import game from "./reducers/game.reducer";
import tools from "./reducers/tools.reducer";
import agedClones from "./reducers/aged-clones.reducer";
import specialClones from "./reducers/special-clones.reducer";
import configuration from "./reducers/configuration.reducer";

const rootReducer = combineReducers({
	game,
	tools,
	agedClones,
	specialClones,
	configuration
});

export default rootReducer;