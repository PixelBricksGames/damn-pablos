import * as actionType from "../../units/actions.type";

export const updateTimer = (seconds) => ({
	type: actionType.TIME.UPDATE,
	seconds
});

export const updatePartialSeconds = (seconds) => ({
	type: actionType.TIME.UPDATE_PARTIAL_SECONDS,
	seconds
});

export const clearPartialSeconds = () => ({
	type: actionType.TIME.CLEAR_PARTIAL_SECONDS
});
