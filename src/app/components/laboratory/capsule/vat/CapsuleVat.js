import React from "react";
import Roger from "@pabrick/roger";
import rClock from "./../../../../services/roger.service";
import { CLONES } from "../../../../units/animations";

import "./CapsuleVat.scss";

import {
	animFetus,
} from "./clones/fetus";

class CapsuleVat extends React.Component {
	currentAnimations;

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		rClock.updateWith(this.props.time.total);
		this.setAnimation(CLONES.FETUS.CREATION);
	}

	componentDidMount() {
		this.clones1 = new Roger.Toon("clones_1");
		this.clones1 = addAnimations(this.clones1);
		this.setAnimation(this.props.animations.clones);

		rClock.addToList(this.clones1);
		// rClock.setDebugMode(true);
	}

	render() {
		return (
			<div className="vat">
				<div className="vat__overlay"></div>
				<div className="vat__clones">
					<div id="clones_1"></div>
				</div>
				<div className="vat__bubbles"></div>
				<div className="vat__underlay"></div>
			</div>
		);
	}

	setAnimation(animations) {
		// console.log("animations", animations);
		if(animations !== this.currentAnimations) {
			this.currentAnimations = animations;
			this.currentAnimations = CLONES.FETUS.CREATION;
			this.clones1.play(CLONES.FETUS.CREATION);
		} else if(this.clones1.animList.get(CLONES.FETUS.CREATION).hasFinished) {
			this.currentAnimations = CLONES.FETUS.LOOP;
			this.clones1.play(CLONES.FETUS.LOOP);
		}
	}
}

const addAnimations = (rogerToon) => {
	rogerToon.add(animFetus.creation);
	rogerToon.add(animFetus.loop);

	return rogerToon;
}

export default CapsuleVat;