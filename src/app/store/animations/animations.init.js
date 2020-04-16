import * as SavedStore from "../saved-store";
import * as ANIMATIONS from "../../units/animations";

const init = {
	assistant: {
		faceExpression: ANIMATIONS.ASSISTANT.FACE_EXPRESSION.NORMAL,
		bodyExpression: ANIMATIONS.ASSISTANT.BODY_EXPRESSION.NORMAL,
		eyeDirection: ANIMATIONS.ASSISTANT.EYE_DIRECTION.CAMERA,
		isTalking: false
	}
};

// export const animations = SavedStore.getSavedState("animations", init);
export const animations = init;