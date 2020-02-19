import React from "react";
import "./Root.scss";

import { timeService } from "../../services/time.service";
import Ui from "../ui/Ui.container";
import LaboratoryConnector from "../laboratory/Laboratory.connector";

const Root = () => (
    <main className="root">
		<Ui />
		<LaboratoryConnector />
	</main>
);

export default Root;