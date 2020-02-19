import React from "react";
import "./Root.scss";

import { timeService } from "../../services/time.service";
import UiContainer from "../ui/Ui.container";
import LaboratoryContainer from "../laboratory/Laboratory.container";

const Root = () => (
    <main className="root">
		<UiContainer></UiContainer>
		<LaboratoryContainer></LaboratoryContainer>
	</main>
);

export default Root;