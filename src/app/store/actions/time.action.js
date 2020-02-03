import * as actionType from "../../units/actions.type";

export const updateTimer = (seconds) => ({
	type: actionType.TIME.UPDATE,
	seconds
});
