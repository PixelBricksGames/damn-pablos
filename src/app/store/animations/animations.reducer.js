import * as initState from "./animations.init";
import * as actionType from "./animations.type";

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

		case actionType.ANIMATIONS.ASSISTANT.SET_MOUTH:
			return {
				...state,
				assistant: {
					...state.assistant,
					mouth: action.mouth
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

		default:
			return state;
	}
};

export default animations;