import React from "react";
import "./Root.scss";

import InfoManager from "./../../managers/InfoManager";
import LaboratoryManager from "./../../managers/LaboratoryManager";
import MenuManager from "./../../managers/MenuManager";

const Root = () => (
    <main className="app">
		<InfoManager></InfoManager>
		<LaboratoryManager></LaboratoryManager>
		<MenuManager></MenuManager>
	</main>
);

export default Root;