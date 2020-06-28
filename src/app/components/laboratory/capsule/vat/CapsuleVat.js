import React from "react";
import Roger from "@pabrick/roger";
import rClock from "./../../../../services/roger.service";
import { CLONES } from "../../../../units/animations";

import "./CapsuleVat.scss";

import {
	animFetus,
} from "./clones/fetus";

class CapsuleVat extends React.Component {
	currentAnimation;

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		rClock.updateWith(this.props.time.total);
		this.setAnimation(this.props.animations.clones);
	}

	componentDidMount() {
		this.clones = new Roger.Toon("clones");
		this.clones = addAnimations(this.clones);

		rClock.addToList(this.clones);
	}

	render() {
		return (
			<div className="vat">
				<div className="vat__overlay"></div>
				<div className="vat__clones">
					<div id="clones"></div>
				</div>
				<div className="vat__bubbles"></div>
				<div className="vat__underlay"></div>
			</div>
		);
	}

	setAnimation(animation) {
		console.log("animations", animation);
		if(animation !== this.currentAnimation) {
			this.currentAnimation = animation;
			console.log("currentAnimation", animation);
			if(animation !== CLONES.NONE) {
				this.clones.play(animation);
			}
		} else if(this.clones.animList.get(CLONES.FETUS.CREATION).hasFinished) {
			this.currentAnimation = 'loop';
			this.clones.play(CLONES.FETUS.LOOP);
		}
	}
}

const addAnimations = (rogerToon) => {
	rogerToon.add(animFetus.creation);
	rogerToon.add(animFetus.loop);

	return rogerToon;
}

export default CapsuleVat;