import React from "react";
import PropTypes from "prop-types";
import Roger from "@pabrick/roger";
import rClock from "./../../../services/roger.service";
import { translations } from "../../../units/translations";
import * as ANIMATIONS from "../../../units/animations";
import "./Assistant.scss";

const ssPablosHeads = new Roger.RegularSheet("./../../../assets/images/common/spritesheet.png", {w:512,h:512}, {w:54,h:90});
const pabloIdleSprite = new Roger.Sprite("./../../../assets/images/common/spritesheet.png", {w:54,h:90}, {x:0,y:0});
const animPablos_blink1 = new Roger.Animation("blink1",
										ssPablosHeads,
										[0,1,2,1,0],
										{ delay: 10, loops: -1, callBack: ()=> {
												console.log("blink complete!");
											}
										});

const animPablos_talk1 = new Roger.Animation("talk1",
										ssPablosHeads,
										[3,4,5,6,7],
										{ direction: "random" });


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
		this.pabloToon = new Roger.Toon("pablo", pabloIdleSprite);
		this.pabloToon.addAnimation(animPablos_blink1);
		this.pabloToon.addAnimation(animPablos_talk1);
		rClock.addToonToUpdate(this.pabloToon);
	}

	render() {
		return (
			<section className="assistant">
				<div id="pablo" className="pablo"></div>
			</section>
		);
	}

	setAnimation(animations) {
		if(animations !== this.currentAnimations) {

			if(animations.face === ANIMATIONS.ASSISTANT.FACE.NORMAL
			&& animations.face !== this.currentAnimations.face) {
				this.currentAnimations.face = animations.face;
				this.pabloToon.playAnimation("blink1");
			}

			if(animations.mouth === ANIMATIONS.ASSISTANT.MOUTH.TALK
			&& animations.mouth !== this.currentAnimations.mouth) {
				this.currentAnimations.mouth = animations.mouth;
				this.pabloToon.playAnimation("talk1");
			}

		}
	}
}

export default Assistant;