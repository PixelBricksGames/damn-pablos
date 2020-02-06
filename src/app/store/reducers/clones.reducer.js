import { combineReducers } from "redux-immutable";

import fetus from "./clones/fetus.reducer";

const clones = combineReducers({
	fetus
});

export default clones;