import React from "react";
import PropTypes from "prop-types";
import Roger from "@pabrick/roger";
import rClock from "./../../../services/roger.service";
import { translations } from "../../../units/translations";
import { ASSISTANT } from "../../../units/animations";
import "./Assistant.scss";

import {
	spritePabloHead,
	spritePabloMouth,
	spritePabloArms,
	animPabloHead,
	animPabloEyebrows,
	animPabloEyes,
	animPabloMouth
} from "./pablo";

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
		this.pablo = {
			head: new Roger.Toon("pablo-base", spritePabloHead.camera),
			eyebrows: new Roger.Toon("pablo-eyebrows"),
			eyes: new Roger.Toon("pablo-eyelids"),
			mouth: new Roger.Toon("pablo-mouth", spritePabloMouth.idle),
			armLeft: new Roger.Toon("pablo__arm--left", spritePabloArms.left),
			armRight: new Roger.Toon("pablo__arm--right", spritePabloArms.right),
		}

		this.pablo.eyebrows.add(animPabloEyebrows.normal);
		this.pablo.eyebrows.add(animPabloEyebrows.serious);
		this.pablo.eyebrows.add(animPabloEyebrows.angry);
		this.pablo.eyebrows.add(animPabloEyebrows.surprise);
		this.pablo.eyebrows.add(animPabloEyebrows.doubt);

		this.pablo.eyes.add(animPabloEyes.blink);

		this.pablo.mouth.add(animPabloMouth.idle_normal);
		this.pablo.mouth.add(animPabloMouth.talk_normal);

		rClock.addToList(this.pablo.head);
		rClock.addToList(this.pablo.eyebrows);
		rClock.addToList(this.pablo.eyes);
		rClock.addToList(this.pablo.mouth);
		rClock.addToList(this.pablo.armLeft);
		rClock.addToList(this.pablo.armRight);

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
					<div className="pablo__body"></div>
					<div className="pablo__arms">
						<div id="pablo__arm--right"></div>
						<div id="pablo__arm--left"></div>
					</div>
				</div>
			</section>
		);
	}

	setAnimation(animations) {

		if(animations !== this.currentAnimations) {
			console.log('animations', animations);
			this.currentAnimations = animations;
			this.pablo.eyes.play(ASSISTANT.EYELIDS.BLINK);
			this.pablo.eyebrows.play(animations.faceExpression);

			if(animations.isTalking) {
				this.pablo.mouth.play(ASSISTANT.MOUTH.TALK.NORMAL);
			} else {
				this.pablo.mouth.play(ASSISTANT.MOUTH.IDLE.NORMAL);
			}

		}
	}
}

export default Assistant;