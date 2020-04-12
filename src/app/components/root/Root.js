import React from "react";
import "./Root.scss";

import { timeService } from "../../services/time.service";
import UiContainer from "../ui/Ui.container";
import LaboratoryConnector from "../laboratory/Laboratory.connector";

// import Roger from "@pabrick/roger";
// const ssPablosHeads = new Roger.RegularSheet("./../../../assets/images/common/spritesheet.png", {w:512,h:512}, {w:54,h:90});
// const pabloIdleSprite = new Roger.Sprite("./../../../assets/images/common/spritesheet.png", {w:54,h:90}, {x:0,y:0});
// const animPablos_blink1 = new Roger.Animation("blink1",
//                                                 ssPablosHeads,
//                                                 [0,1,2,1,0],
//                                                 { delay: 10, loops: -1, callBack: ()=> {
//                                                         console.log("blink complete!");
//                                                     }
// 												});

// const animPablos_talk1 = new Roger.Animation("talk1",
//                                                 ssPablosHeads,
//                                                 [3,4,5,6,7],
//                                                 { direction: "random" });

// const pabloToon = new Roger.Toon("pablo", pabloIdleSprite);
// pabloToon.addAnimation(animPablos_blink1);
// pabloToon.playAnimation("blink1");
// const rClock = new Roger.Clock(0.1);
// rClock.addToonToUpdate(pabloToon);
// rClock.setDebugMode(true);
// rClock.start();

// const setToon = (domElement, sprite) => {
// 	const pabloToon = new Roger.Toon(domElement, sprite);
// 	pabloToon.addAnimation(animPablos_blink1);
// 	pabloToon.playAnimation("blink1");
// 	rClock.addToonToUpdate(pabloToon);
// };

// class Root extends React.Component {
// 	constructor() {
// 		super();
// 	}
// 	componentDidMount() {
// 		setToon("pablo", pabloIdleSprite);
// 		console.log(window.pabloToon);
// 	}
// 	render() {
// 		return (
// 			<main className="root">
// 				<UiContainer />
// 				<LaboratoryConnector />
// 			</main>
// 		);
// 	}
// }

const Root = () => (
	<main className="root">
		<UiContainer />
		<LaboratoryConnector />
	</main>
);

export default Root;