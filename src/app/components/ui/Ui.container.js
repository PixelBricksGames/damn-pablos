import React from "react";
import "./Ui.scss";

import InfoConnector from "./info/Info.connector";
import MenuConnector from "./menu/Menu.connector";
import CurrenciesConnector from "./currencies/Currencies.connector";
import AssistantConnector from "./assistant/Assistant.connector";

const UiContainer = () => (
    <main className="ui">
		<InfoConnector />
		<MenuConnector />
		<div className="ui__bottom">
			<AssistantConnector />
			{/* <CurrenciesConnector /> */}
		</div>
	</main>
);

export default UiContainer;