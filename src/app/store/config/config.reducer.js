import * as initState from "./config.init";
import * as actionType from "./config.type";

const config = (state = initState.config, action) => {
	switch (action.type) {
		case actionType.CONFIG.LANGUAGE.SET:
			return {
				...state,
				language: action.language
			};
		default:
			return state;
	}
};

export default config;