import * as actionType from "./time.type";

export const updateTimeTotal = () => ({
	type: actionType.TIME.TOTAL.UPDATE
});

export const updateTimeSec = () => ({
	type: actionType.TIME.SEC.UPDATE,
});

export const clearTimeSec = () => ({
	type: actionType.TIME.SEC.CLEAR
});

export const updateTimeDec = () => ({
	type: actionType.TIME.DEC.UPDATE,
});

export const clearTimeDec = () => ({
	type: actionType.TIME.DEC.CLEAR
});
