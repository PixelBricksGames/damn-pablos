import * as actionType from "./animations.type";

export const setAssistantFaceExpression = (faceExpression) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_FACE_EXPRESSION,
	faceExpression
});

export const setAssistantBodyExpression = (bodyExpression) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_BODY_EXPRESSION,
	bodyExpression
});

export const setAssistantEyeDirection = (eyeDirection) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_EYE_DIRECTION,
	eyeDirection
});

export const setAssistantTalking = (isTalking) => ({
	type: actionType.ANIMATIONS.ASSISTANT.SET_TALKING,
	isTalking
});
