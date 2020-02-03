import * as actionType from "../../units/actions.type";

export const updateTimeTotal = () => ({
	type: actionType.TIME.UPDATE_TOTAL
});

export const updateTimeSec = () => ({
	type: actionType.TIME.UPDATE_SEC,
});

export const clearTimeSec = () => ({
	type: actionType.TIME.CLEAR_SEC
});

export const updateTimeDec = () => ({
	type: actionType.TIME.UPDATE_DEC,
});

export const clearTimeDec = () => ({
	type: actionType.TIME.CLEAR_DEC
});
