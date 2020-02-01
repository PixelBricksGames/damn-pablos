import * as actionType from "../../units/actions.type";

export const createCronjob = () => ({
	type: actionType.TOOLS.CREATE_CRONJOB
});

export const deleteCronjob = () => ({
	type: actionType.TOOLS.DELETE_CRONJOB
});