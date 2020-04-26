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
	normal: new Roger.Animation(ASSISTANT.FACE_EXPRESSION.NORMAL, sheetPabloHead, [5]),
	serious: new Roger.Animation(ASSISTANT.FACE_EXPRESSION.SERIOUS, sheetPabloHead, [6]),
	angry: new Roger.Animation(ASSISTANT.FACE_EXPRESSION.ANGRY, sheetPabloHead, [7]),
	surprise: new Roger.Animation(ASSISTANT.FACE_EXPRESSION.SURPRISE, sheetPabloHead, [8]),
	doubt: new Roger.Animation(ASSISTANT.FACE_EXPRESSION.DOUBT, sheetPabloHead, [9])
};

export const animPabloEyes = {
	blink: new Roger.Animation(ASSISTANT.EYELIDS.BLINK, sheetPabloHead, [10,11,12, 13, 13, 11,10], { delay: 20 })
};

export const animPabloMouth = {
	idle_normal: new Roger.Animation(ASSISTANT.MOUTH.IDLE.NORMAL, sheetPabloHead, [14]),
	talk_normal: new Roger.Animation(ASSISTANT.MOUTH.TALK.NORMAL, sheetPabloHead, [15, 16, 17, 18, 19], { direction: "random" })
};