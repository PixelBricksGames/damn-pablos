import { combineReducers } from "redux-immutable";

import fetus from "./fetus/fetus.reducer";

const clones = combineReducers({
	fetus
});

export default clones;