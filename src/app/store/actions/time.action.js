import * as actionType from "../../units/actions.type";

export const updateTimer = (miliseconds) => ({
	type: actionType.TIME.UPDATE,
	miliseconds
});
