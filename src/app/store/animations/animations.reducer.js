import * as initState from "./animations.init";
import * as actionType from "./animations.type";

const animations = (state = initState.animations, action) => {
	switch (action.type) {
		case actionType.ANIMATIONS.ASSISTANT.SET_FACE_EXPRESSION:
			return {
				...state,
				assistant: {
					...state.assistant,
					faceExpression: action.faceExpression
				}
			};

		case actionType.ANIMATIONS.ASSISTANT.SET_BODY_EXPRESSION:
			return {
				...state,
				assistant: {
					...state.assistant,
					bodyExpression: action.bodyExpression
				}
			};

		case actionType.ANIMATIONS.ASSISTANT.SET_EYE_DIRECTION:
			return {
				...state,
				assistant: {
					...state.assistant,
					eyeDirection: action.eyeDirection
				}
			};

		case actionType.ANIMATIONS.ASSISTANT.SET_TALKING:
			return {
				...state,
				assistant: {
					...state.assistant,
					isTalking: action.isTalking
				}
			};

		default:
			return state;
	}
};

export default animations;