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
	animPabloMouth,
	animPabloArms
} from "./pablo";

class Assistant extends React.Component {
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
			armLeft: new Roger.Toon("pablo__arm--left"),
			armRight: new Roger.Toon("pablo__arm--right", spritePabloArms.right),
		}

		this.pablo = addAnimations(this.pablo);

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
			this.pablo.eyes.play(ASSISTANT.EYELIDS.TIRED.BLINK);
			this.pablo.eyebrows.play(animations.face);

			// if(animations.body !== this.currentAnimations.body) {
				this.pablo.armRight.play(animations.body);
				this.pablo.armLeft.play(animations.body);
			// }

			if(animations.isTalking) {
				this.pablo.mouth.play(ASSISTANT.MOUTH.NORMAL.TALK);
			} else {
				this.pablo.mouth.play(ASSISTANT.MOUTH.NORMAL.IDLE);
			}
		}
	}
}

const addAnimations = (rogerToon) => {
	rogerToon.head.add(animPabloHead.camera);
	rogerToon.head.add(animPabloHead.up);
	rogerToon.head.add(animPabloHead.down);
	rogerToon.head.add(animPabloHead.left);
	rogerToon.head.add(animPabloHead.right);

	rogerToon.eyebrows.add(animPabloEyebrows.normal);
	rogerToon.eyebrows.add(animPabloEyebrows.serious);
	rogerToon.eyebrows.add(animPabloEyebrows.angry);
	rogerToon.eyebrows.add(animPabloEyebrows.surprise);
	rogerToon.eyebrows.add(animPabloEyebrows.doubt);

	rogerToon.eyes.add(animPabloEyes.normal.blink);
	rogerToon.eyes.add(animPabloEyes.normal.closed);
	rogerToon.eyes.add(animPabloEyes.tired.blink);
	rogerToon.eyes.add(animPabloEyes.tired.closed);

	rogerToon.mouth.add(animPabloMouth.normal.idle);
	rogerToon.mouth.add(animPabloMouth.normal.talk);

	rogerToon.armLeft.add(animPabloArms.left.idle);
	rogerToon.armLeft.add(animPabloArms.left.pointing);
	rogerToon.armLeft.add(animPabloArms.left.explaining);
	rogerToon.armLeft.add(animPabloArms.left.dunno);

	rogerToon.armRight.add(animPabloArms.right.idle);
	rogerToon.armRight.add(animPabloArms.right.pointing);
	rogerToon.armRight.add(animPabloArms.right.explaining);
	rogerToon.armRight.add(animPabloArms.right.dunno);

	return rogerToon;
}

export default Assistant;