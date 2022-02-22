import * as actionType from "./config.type";

export const setLanguage = (language) => ({
	type: actionType.CONFIG.LANGUAGE.SET,
	language: language
});
