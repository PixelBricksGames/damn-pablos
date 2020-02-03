import React from "react";
import "./Root.scss";

import { timeService } from "./../services/time.service";
import TimeShellContainer from "../time-shell/TimeShell.container";
import InfoContainer from "../info/Info.container";
import LaboratoryContainer from "../laboratory/Laboratory.container";
import MenuContainer from "../menu/Menu.container";

const Root = () => (
    <main className="app">
		<InfoContainer></InfoContainer>
		<LaboratoryContainer></LaboratoryContainer>
		<MenuContainer></MenuContainer>
	</main>
);

export default Root;