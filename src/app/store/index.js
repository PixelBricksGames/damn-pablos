import { createStore } from "redux";
import { enableBatching } from 'redux-batched-actions';

import rootReducer from "./root.reducer";

const store = createStore(
	enableBatching(rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;