import React from "react";
import "./Root.scss";

import InfoContainer from "../info/Info.container";
import LaboratoryContainer from "../laboratory/Laboratory.container";
import MenuContainer from "../menu/Menu.container";

import Roger from "@pabrick/roger";

const rClock = new Roger.Clock(0.1);
rClock.setDebugMode(true);
rClock.start();

setTimeout(()=>{
	rClock.pause();
}, 1000);

setTimeout(()=>{
	rClock.play();
}, 1500);

setTimeout(()=>{
	rClock.stop();
}, 2000);

const Root = () => (
    <main className="app">
		<InfoContainer></InfoContainer>
		<LaboratoryContainer></LaboratoryContainer>
		<MenuContainer></MenuContainer>
	</main>
);

export default Root;