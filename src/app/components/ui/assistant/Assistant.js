import React from "react";
import PropTypes from "prop-types";

import { translations } from "../../../units/translations";

import "./Assistant.scss";

import Roger from "@pabrick/roger";
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

const rClock = new Roger.Clock(0.1);
// rClock.setDebugMode(true);
rClock.start();

// const Assistant = ({
// 	game,
// 	config
// }) => (
// 	<section className="assistant">
// 		<div id="pablo" className="pablo"></div>
// 	</section>
// );

class Assistant extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const pabloToon = new Roger.Toon("pablo", pabloIdleSprite);
		rClock.addToonToUpdate(pabloToon);

		pabloToon.addAnimation(animPablos_blink1);
		pabloToon.playAnimation("blink1");
	}

	render() {
		return (
			<section className="assistant">
				<div id="pablo" className="pablo"></div>
			</section>
		);
	}
}

export default Assistant;