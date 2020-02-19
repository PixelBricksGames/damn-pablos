import React from "react";
import "./Root.scss";

import { timeService } from "../../services/time.service";
import UiConnector from "../ui/Ui.connector";
import LaboratoryConnector from "../laboratory/Laboratory.connector";

const Root = () => (
    <main className="root">
		<UiConnector />
		<LaboratoryConnector />
	</main>
);

export default Root;