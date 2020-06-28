import * as actionType from "./animations.type";

export const setAssistantFace = (face) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_FACE,
	face
});

export const setAssistantBody = (body) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_BODY,
	body
});

export const setAssistantEyeDirection = (eyeDirection) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_EYE_DIRECTION,
	eyeDirection
});

export const setAssistantTalking = (isTalking) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_TALKING,
	isTalking
});

export const setCapsuleVatFetusCreation = () => ({
	type: actionType.ANIMATIONS.CLONES.FETUS.CREATION
});

export const setCapsuleVatFetusLoop = () => ({
	type: actionType.ANIMATIONS.CLONES.FETUS.LOOP
});
