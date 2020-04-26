import Roger from "@pabrick/roger";
import { ASSISTANT } from "../../../units/animations";

const pabloHead = {
	url: "./../../../assets/images/assistant/pablo-head-sheet.png",
	sheet:  { w:480, h:525 },
	sprite: { w:96, h:105 }
};

const pabloArms = {
	url: "./../../../assets/images/assistant/pablo-arms-sheet.png",
	sheet:  { w:360, h:630 },
	sprite: { w:120, h:210 }
};

const sheetPabloHead = new Roger.RegularSheet(pabloHead.url, pabloHead.sheet, pabloHead.sprite);
const sheetPabloArms = new Roger.RegularSheet(pabloArms.url, pabloArms.sheet, pabloArms.sprite);

export const spritePabloHead = {
	camera: new Roger.Sprite(pabloHead.url, pabloHead.sheet, { x:0, y:0 })
};

export const spritePabloMouth = {
	idle: new Roger.Sprite(pabloHead.url, pabloHead.sheet, {x:(pabloHead.sprite.w * 4),y:(pabloHead.sprite.h * 2)})
};

export const spritePabloArms = {
	right: new Roger.Sprite(pabloArms.url, pabloArms.sheet, {x:(pabloArms.sprite.w * 0),y:(pabloArms.sprite.h * 0)}),
	left: new Roger.Sprite(pabloArms.url, pabloArms.sheet, {x:(pabloArms.sprite.w * 0),y:(pabloArms.sprite.h * 1)})
};

export const animPabloHead = {
	camera: new Roger.Animation("camera", sheetPabloHead, [0]),
	right: new Roger.Animation("right", sheetPabloHead, [1]),
	left: new Roger.Animation("left", sheetPabloHead, [2]),
	up: new Roger.Animation("up", sheetPabloHead, [3]),
	down: new Roger.Animation("down", sheetPabloHead, [4])
};

export const animPabloEyebrows = {
	normal: new Roger.Animation(ASSISTANT.FACE.NORMAL, sheetPabloHead, [5]),
	serious: new Roger.Animation(ASSISTANT.FACE.SERIOUS, sheetPabloHead, [6]),
	angry: new Roger.Animation(ASSISTANT.FACE.ANGRY, sheetPabloHead, [7]),
	surprise: new Roger.Animation(ASSISTANT.FACE.SURPRISE, sheetPabloHead, [8]),
	doubt: new Roger.Animation(ASSISTANT.FACE.DOUBT, sheetPabloHead, [9])
};

export const animPabloEyes = {
	normal: {
		blink: new Roger.Animation(ASSISTANT.EYELIDS.NORMAL.BLINK, sheetPabloHead, [10, 11, 12, 13, 12, 11, 10], { delay: 20 }),
		closed: new Roger.Animation(ASSISTANT.EYELIDS.NORMAL.CLOSED, sheetPabloHead, [13])
	},
	tired: {
		blink: new Roger.Animation(ASSISTANT.EYELIDS.TIRED.BLINK, sheetPabloHead, [11, 12, 13, 12, 11], { delay: 20 }),
		closed: new Roger.Animation(ASSISTANT.EYELIDS.TIRED.CLOSED, sheetPabloHead, [13])
	}
};

export const animPabloMouth = {
	normal: {
		idle: new Roger.Animation(ASSISTANT.MOUTH.NORMAL.IDLE, sheetPabloHead, [14]),
		talk: new Roger.Animation(ASSISTANT.MOUTH.NORMAL.TALK, sheetPabloHead, [15, 16, 17, 18, 19], { direction: "random" })
	}
};

export const animPabloArms = {
	left: {
		idle: new Roger.Animation(ASSISTANT.BODY.IDLE, sheetPabloArms, [3]),
		pointing: new Roger.Animation(ASSISTANT.BODY.POINTING, sheetPabloArms, [3, 4, 6, 6, 7], { loops: 1, callBack: () => {} }),
		explaining: new Roger.Animation(ASSISTANT.BODY.EXPLAINING, sheetPabloArms, [3, 4, 6, 6, 8], { loops: 1, callBack: () => {}}),
		dunno: new Roger.Animation(ASSISTANT.BODY.DUNNO, sheetPabloArms, [3, 4, 5], { loops: 1, callBack: () => {} })
		// random: new Roger.Animation(ASSISTANT.BODY.DUNNO, sheetPabloArms, [3, 4, 5, 6, 7, 8], { direction: "random" }),
	},
	right: {
		idle: new Roger.Animation(ASSISTANT.BODY.IDLE, sheetPabloArms, [0]),
		pointing: new Roger.Animation(ASSISTANT.BODY.POINTING, sheetPabloArms, [0], { loops: 1 }),
		explaining: new Roger.Animation(ASSISTANT.BODY.EXPLAINING, sheetPabloArms, [0], { loops: 1 }),
		dunno: new Roger.Animation(ASSISTANT.BODY.DUNNO, sheetPabloArms, [0, 1, 2], { loops: 1, callBack: () => {} })
		// random: new Roger.Animation(ASSISTANT.BODY.DUNNO, sheetPabloArms, [0, 1, 2], { direction: "random" }),
	}
};