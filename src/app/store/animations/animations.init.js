import * as SavedStore from "../saved-store";
import * as ANIMATIONS from "../../units/animations";

const init = {
	assistant: {
		name: ANIMATIONS.ASSISTANT.CHARACTER.PABLO,
		face: ANIMATIONS.ASSISTANT.FACE.NORMAL,
		body: ANIMATIONS.ASSISTANT.BODY.IDLE,
		eyeDirection: ANIMATIONS.ASSISTANT.EYE_DIRECTION.CAMERA,
		isTalking: false
	},
	clones: ANIMATIONS.CLONES.NONE
};

// export const animations = SavedStore.getSavedState("animations", init);
export const animations = init;