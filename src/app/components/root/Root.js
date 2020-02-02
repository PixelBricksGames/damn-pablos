import React from "react";
import "./Root.scss";

import TimeShellContainer from "../time-shell/TimeShell.container";
import InfoContainer from "../info/Info.container";
import LaboratoryContainer from "../laboratory/Laboratory.container";
import MenuContainer from "../menu/Menu.container";

const Root = () => (
    <main className="app">
		<TimeShellContainer>
			<InfoContainer></InfoContainer>
			<LaboratoryContainer></LaboratoryContainer>
			<MenuContainer></MenuContainer>
		</TimeShellContainer>
	</main>
);

export default Root;