import * as actionType from "./animations.type";

export const animAssistantFace = (face) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_FACE,
	face
});

export const animAssistantMouth = (mouth) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_MOUTH,
	mouth
});

export const animAssistantBody = (body) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_BODY,
	body
});

