import * as actionType from "../../units/actions.type";

export const updateTimeTotal = () => ({
	type: actionType.TIME.UPDATE.TOTAL
});

export const updateTimeSec = () => ({
	type: actionType.TIME.UPDATE.SEC,
});

export const clearTimeSec = () => ({
	type: actionType.TIME.CLEAR.SEC
});

export const updateTimeDec = () => ({
	type: actionType.TIME.UPDATE.DEC,
});

export const clearTimeDec = () => ({
	type: actionType.TIME.CLEAR.DEC
});
