import React from "react";
import "./Root.scss";

import { timeService } from "../../services/time.service";
import UiContainer from "../ui/Ui.container";
import LaboratoryConnector from "../laboratory/Laboratory.connector";

const Root = () => (
    <main className="root">
		<UiContainer />
		<LaboratoryConnector />
	</main>
);

export default Root;