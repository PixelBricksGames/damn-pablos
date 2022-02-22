import Roger from "@pabrick/roger";
import { CLONES } from "../../../../../units/animations";

const fetusCreation = {
	url: "./../../../../assets/images/clones/fetus_creation.png",
	sheet:  { w:880, h:1440 },
	sprite: { w:176, h:360 }
};

const fetusLoop = {
	url: "./../../../../assets/images/clones/fetus_loop.png",
	sheet:  { w:704, h:1080 },
	sprite: { w:176, h:360 }
};

const sheetFetusCreation = new Roger.RegularSheet(fetusCreation.url, fetusCreation.sheet, fetusCreation.sprite);
const sheetFetusLoop = new Roger.RegularSheet(fetusLoop.url, fetusLoop.sheet, fetusLoop.sprite);

export const animFetus = {
	creation: new Roger.Animation(CLONES.FETUS.CREATION, sheetFetusCreation,
		[0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19],
		{ loops: 0 }),
	loop: new Roger.Animation(CLONES.FETUS.LOOP, sheetFetusLoop,
		[0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]),
};
