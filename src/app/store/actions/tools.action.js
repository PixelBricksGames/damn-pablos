import * as actionType from "../../units/actions.type";

export const createAutoClone = () => ({
	type: actionType.TOOLS.CREATE.AUTO_CLONE
});

export const createAutoSerum = () => ({
	type: actionType.TOOLS.CREATE.AUTO_SERUM
});

export const deleteAutoSerum = () => ({
	type: actionType.TOOLS.DELETE.AUTO_SERUM
});

export const deleteAutoClone = () => ({
	type: actionType.TOOLS.DELETE.AUTO_CLONE
});