import React from "react";
import PropTypes from "prop-types";
import Roger from "@pabrick/roger";
import rClock from "./../../../services/roger.service";
import { translations } from "../../../units/translations";
import { ASSISTANT } from "../../../units/animations";
import "./Assistant.scss";

const spriteSheetUrl = "./../../../assets/images/assistant/assistant-head-sheet.png";
const spriteSize = {w:96,h:105};
const spriteSheetSize = {w:480,h:525};

const ssPablosHeads = new Roger.RegularSheet(spriteSheetUrl, spriteSheetSize, spriteSize);

const spritePabloHead_camera = new Roger.Sprite(spriteSheetUrl, spriteSheetSize, {x:0,y:0});
const spritePabloMouth_idle = new Roger.Sprite(spriteSheetUrl, spriteSheetSize, {x:(spriteSize.w * 4),y:(spriteSize.h * 2)});

// const pabloHead_camera = new Roger.Animation("camera", ssPablosHeads, [0], { loops: -1 });
// const pabloHead_right = new Roger.Animation("right", ssPablosHeads, [1], { loops: -1 });
// const pabloHead_left = new Roger.Animation("left", ssPablosHeads, [2], { loops: -1 });
// const pabloHead_up = new Roger.Animation("up", ssPablosHeads, [3], { loops: -1 });
// const pabloHead_down = new Roger.Animation("down", ssPablosHeads, [4], { loops: -1 });

const animPablo_eyebrows_normal = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.NORMAL, ssPablosHeads, [5], { loops: -1 });
const animPablo_eyebrows_serious = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.SERIOUS, ssPablosHeads, [6], { loops: -1 });
const animPablo_eyebrows_angry = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.ANGRY, ssPablosHeads, [7], { loops: -1 });
const animPablo_eyebrows_surprise = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.SURPRISE, ssPablosHeads, [8], { loops: -1 });
const animPablo_eyebrows_doubt = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.DOUBT, ssPablosHeads, [9], { loops: -1 });

const animPablo_blink = new Roger.Animation(ASSISTANT.EYELIDS.BLINK, ssPablosHeads, [10,11,12, 13, 13, 11,10], { delay: 20, loops: -1 });

const animPablo_mouth_idle_normal = new Roger.Animation(ASSISTANT.MOUTH.IDLE.NORMAL, ssPablosHeads, [14], { loops: -1 });
const animPablo_mouth_talk_normal = new Roger.Animation(ASSISTANT.MOUTH.TALK.NORMAL, ssPablosHeads, [15, 16, 17, 18, 19], { direction: "random" });

// const loadHeadAnimations = (rogerToon) => {
// 	rogerToon.addAnimation(pabloHead_camera);
// 	rogerToon.addAnimation(pabloHead_right);
// 	rogerToon.addAnimation(pabloHead_left);
// 	rogerToon.addAnimation(pabloHead_up);
// 	rogerToon.addAnimation(pabloHead_down);
// 	return rogerToon;
// }

class Assistant extends React.Component {
	pabloToon;
	currentAnimations;

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		rClock.updateWith(this.props.time.total);
		this.setAnimation(this.props.animations.assistant);
	}

	componentDidMount() {
		this.pabloHead = new Roger.Toon("pablo-base", spritePabloHead_camera);
		// this.pabloHead = loadHeadAnimations(this.pabloHead);
		rClock.addToonToUpdate(this.pabloHead);

		this.pabloEyebrows = new Roger.Toon("pablo-eyebrows");
		this.pabloEyebrows.addAnimation(animPablo_eyebrows_normal);
		this.pabloEyebrows.addAnimation(animPablo_eyebrows_serious);
		this.pabloEyebrows.addAnimation(animPablo_eyebrows_angry);
		this.pabloEyebrows.addAnimation(animPablo_eyebrows_surprise);
		this.pabloEyebrows.addAnimation(animPablo_eyebrows_doubt);
		rClock.addToonToUpdate(this.pabloEyebrows);

		this.pabloEyelids = new Roger.Toon("pablo-eyelids");
		this.pabloEyelids.addAnimation(animPablo_blink);
		rClock.addToonToUpdate(this.pabloEyelids);

		this.pabloMouth = new Roger.Toon("pablo-mouth", spritePabloMouth_idle);
		this.pabloMouth.addAnimation(animPablo_mouth_idle_normal);
		this.pabloMouth.addAnimation(animPablo_mouth_talk_normal);
		rClock.addToonToUpdate(this.pabloMouth);

		// rClock.setDebugMode(true);
	}

	render() {
		return (
			<section className="assistant">
				<div className="pablo">
					<div className="pablo__head">
						<div id="pablo-base"></div>
						<div id="pablo-mouth"></div>
						<div id="pablo-eyelids"></div>
						<div id="pablo-eyebrows"></div>
					</div>
				</div>
			</section>
		);
	}

	setAnimation(animations) {

		if(animations !== this.currentAnimations) {
			console.log('animations', animations);
			this.currentAnimations = animations;
			this.pabloEyelids.playAnimation(ASSISTANT.EYELIDS.BLINK);
			this.pabloEyebrows.playAnimation(animations.faceExpression);

			if(animations.isTalking) {
				this.pabloMouth.playAnimation(ASSISTANT.MOUTH.TALK.NORMAL);
			} else {
				this.pabloMouth.playAnimation(ASSISTANT.MOUTH.IDLE.NORMAL);
			}

		}
	}
}

export default Assistant;