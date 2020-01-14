import { combineReducers } from "redux-immutable";

import game from "./reducers/game.reducer";

const rootReducer = combineReducers({
	game
});

export default rootReducer;