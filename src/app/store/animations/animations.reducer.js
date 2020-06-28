import * as initState from "./animations.init";
import * as actionType from "./animations.type";
import { CLONES } from "./../../units/animations";

const animations = (state = initState.animations, action) => {
	switch (action.type) {
		case actionType.ANIMATIONS.ASSISTANT.SET_FACE:
			return {
				...state,
				assistant: {
					...state.assistant,
					face: action.face
				}
			};

		case actionType.ANIMATIONS.ASSISTANT.SET_BODY:
			return {
				...state,
				assistant: {
					...state.assistant,
					body: action.body
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

		case actionType.ANIMATIONS.CLONES.FETUS.CREATION:
			return {
				...state,
				clones: CLONES.FETUS.CREATION
			};

		case actionType.ANIMATIONS.CLONES.FETUS.LOOP:
			return {
				...state,
				clones: CLONES.FETUS.LOOP
			};

		default:
			return state;
	}
};

export default animations;