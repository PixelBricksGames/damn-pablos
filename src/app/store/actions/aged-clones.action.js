import * as actionType from "../../units/actions.type";

export const createChildClone = () => ({
	type: actionType.AGED_CLONES.CREATE_CHILD_CLONE
});

export const createTeenClone = () => ({
	type: actionType.AGED_CLONES.CREATE_TEEN_CLONE
});

export const createAdultClone = () => ({
	type: actionType.AGED_CLONES.CREATE_ADULT_CLONE
});

export const createSeniorClone = () => ({
	type: actionType.AGED_CLONES.CREATE_SENIOR_CLONE
});

export const createAncientClone = () => ({
	type: actionType.AGED_CLONES.CREATE_ANCIENT_CLONE
});