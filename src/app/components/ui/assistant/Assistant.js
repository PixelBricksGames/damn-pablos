import React from "react";
import PropTypes from "prop-types";
import Roger from "@pabrick/roger";
import rClock from "./../../../services/roger.service";
import { translations } from "../../../units/translations";
import * as ANIMATIONS from "../../../units/animations";
import "./Assistant.scss";

const ssPablosHeads = new Roger.RegularSheet("./../../../assets/images/assistant/assistant-head-sheet.png", {w:480,h:525}, {w:96,h:105});
const spritePabloHead_camera = new Roger.Sprite("./../../../assets/images/assistant/assistant-head-sheet.png", {w:480,h:525}, {x:0,y:0});
const spritePabloMouth_idle = new Roger.Sprite("./../../../assets/images/assistant/assistant-head-sheet.png", {w:480,h:525}, {x:384,y:210});

// const pabloHead_camera = new Roger.Animation("head-camera", ssPablosHeads, [0], { loops: -1 });
// const pabloHead_right = new Roger.Animation("head-right", ssPablosHeads, [1], { loops: -1 });
// const pabloHead_left = new Roger.Animation("head-left", ssPablosHeads, [2], { loops: -1 });
// const pabloHead_up = new Roger.Animation("head-up", ssPablosHeads, [3], { loops: -1 });
// const pabloHead_down = new Roger.Animation("head-down", ssPablosHeads, [4], { loops: -1 });

const animPablo_blink = new Roger.Animation("blink", ssPablosHeads, [10,11,12, 13, 13, 11,10], { delay: 20, loops: -1 });
const animPablo_talk1 = new Roger.Animation("talk1", ssPablosHeads, [15, 16, 17, 18, 19], { direction: "random" });

// const loadHeadAnimations = (rogerToon) => {
// 	// rogerToon.addAnimation(pabloHead_camera);
// 	rogerToon.addAnimation(pabloHead_right);
// 	rogerToon.addAnimation(pabloHead_left);
// 	rogerToon.addAnimation(pabloHead_up);
// 	rogerToon.addAnimation(pabloHead_down);
// 	return rogerToon;
// }

class Assistant extends React.Component {
	pabloToon;
	currentAnimations = {
		face: '',
		mouth: '',
		body: '',
	};

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

		this.pabloEyelids = new Roger.Toon("pablo-eyelids");
		this.pabloEyelids.addAnimation(animPablo_blink);
		rClock.addToonToUpdate(this.pabloEyelids);

		this.pabloMouth = new Roger.Toon("pablo-mouth", spritePabloMouth_idle);
		this.pabloMouth.addAnimation(animPablo_talk1);
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

			if(animations.face === ANIMATIONS.ASSISTANT.FACE.NORMAL
			&& animations.face !== this.currentAnimations.face) {
				this.currentAnimations.face = animations.face;
				this.pabloEyelids.playAnimation("blink");
				this.pabloMouth.playAnimation("talk1");
			}

			if(animations.mouth === ANIMATIONS.ASSISTANT.MOUTH.TALK
			&& animations.mouth !== this.currentAnimations.mouth) {
				this.currentAnimations.mouth = animations.mouth;
				this.pabloMouth.playAnimation("talk1");
			}

		}
	}
}

export default Assistant;