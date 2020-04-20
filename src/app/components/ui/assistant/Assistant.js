import React from "react";
import PropTypes from "prop-types";
import Roger from "@pabrick/roger";
import rClock from "./../../../services/roger.service";
import { translations } from "../../../units/translations";
import { ASSISTANT } from "../../../units/animations";
import "./Assistant.scss";

const spriteSheetUrl = "./../../../assets/images/assistant/assistant-head-sheet.png";
const spriteSize = { w:96, h:105 };
const spriteSheetSize = { w:480, h:525 };

const ssPablosHeads = new Roger.RegularSheet(spriteSheetUrl, spriteSheetSize, spriteSize);

const spritePabloHead_camera = new Roger.Sprite(spriteSheetUrl, spriteSheetSize, { x:0, y:0 });
const spritePabloMouth_idle = new Roger.Sprite(spriteSheetUrl, spriteSheetSize, {x:(spriteSize.w * 4),y:(spriteSize.h * 2)});

// const pabloHead_camera = new Roger.Animation("camera", ssPablosHeads, [0]);
// const pabloHead_right = new Roger.Animation("right", ssPablosHeads, [1]);
// const pabloHead_left = new Roger.Animation("left", ssPablosHeads, [2]);
// const pabloHead_up = new Roger.Animation("up", ssPablosHeads, [3]);
// const pabloHead_down = new Roger.Animation("down", ssPablosHeads, [4]);

const animPablo_eyebrows_normal = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.NORMAL, ssPablosHeads, [5]);
const animPablo_eyebrows_serious = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.SERIOUS, ssPablosHeads, [6]);
const animPablo_eyebrows_angry = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.ANGRY, ssPablosHeads, [7]);
const animPablo_eyebrows_surprise = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.SURPRISE, ssPablosHeads, [8]);
const animPablo_eyebrows_doubt = new Roger.Animation(ASSISTANT.FACE_EXPRESSION.DOUBT, ssPablosHeads, [9]);

const animPablo_blink = new Roger.Animation(ASSISTANT.EYELIDS.BLINK, ssPablosHeads, [10,11,12, 13, 13, 11,10], { delay: 20 });

const animPablo_mouth_idle_normal = new Roger.Animation(ASSISTANT.MOUTH.IDLE.NORMAL, ssPablosHeads, [14]);
const animPablo_mouth_talk_normal = new Roger.Animation(ASSISTANT.MOUTH.TALK.NORMAL, ssPablosHeads, [15, 16, 17, 18, 19], { direction: "random" });

// const loadHeadAnimations = (rogerToon) => {
// 	rogerToon.add(pabloHead_camera);
// 	rogerToon.add(pabloHead_right);
// 	rogerToon.add(pabloHead_left);
// 	rogerToon.add(pabloHead_up);
// 	rogerToon.add(pabloHead_down);
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
		rClock.addToList(this.pabloHead);

		this.pabloEyebrows = new Roger.Toon("pablo-eyebrows");
		this.pabloEyebrows.add(animPablo_eyebrows_normal);
		this.pabloEyebrows.add(animPablo_eyebrows_serious);
		this.pabloEyebrows.add(animPablo_eyebrows_angry);
		this.pabloEyebrows.add(animPablo_eyebrows_surprise);
		this.pabloEyebrows.add(animPablo_eyebrows_doubt);
		rClock.addToList(this.pabloEyebrows);

		this.pabloEyelids = new Roger.Toon("pablo-eyelids");
		this.pabloEyelids.add(animPablo_blink);
		rClock.addToList(this.pabloEyelids);

		this.pabloMouth = new Roger.Toon("pablo-mouth", spritePabloMouth_idle);
		this.pabloMouth.add(animPablo_mouth_idle_normal);
		this.pabloMouth.add(animPablo_mouth_talk_normal);
		rClock.addToList(this.pabloMouth);

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
			this.pabloEyelids.play(ASSISTANT.EYELIDS.BLINK);
			this.pabloEyebrows.play(animations.faceExpression);

			if(animations.isTalking) {
				this.pabloMouth.play(ASSISTANT.MOUTH.TALK.NORMAL);
			} else {
				this.pabloMouth.play(ASSISTANT.MOUTH.IDLE.NORMAL);
			}

		}
	}
}

export default Assistant;