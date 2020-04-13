import * as SavedStore from "../saved-store";
import * as ANIMATIONS from "../../units/animations";

const init = {
	assistant: {
		face: ANIMATIONS.ASSISTANT.FACE.NORMAL,
		mouth: ANIMATIONS.ASSISTANT.MOUTH.NORMAL,
		body: ANIMATIONS.ASSISTANT.BODY.NORMAL
	}
};

// export const animations = SavedStore.getSavedState("animations", init);
export const animations = init;