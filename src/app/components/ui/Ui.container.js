import React from "react";
import "./Ui.scss";

import InfoConnector from "./info/Info.connector";
import MenuConnector from "./menu/Menu.connector";

const Ui = () => (
    <main className="ui">
		<InfoConnector />
		<MenuConnector />

		{/* <section className="currencies">
			<div className="info-currencies__money">{translations[config.language].GAME.CURRENCY.MONEY}: { game.currency.money }</div>
			<div className="info-currencies__aging-serum">{translations[config.language].GAME.CURRENCY.AGING_SERUM}: { game.currency.agingSerum }</div>
			<div className="info-currencies__anger-serum">{translations[config.language].GAME.CURRENCY.ANGER_SERUM}: { game.currency.angerSerum }</div>
			<div className="info-currencies__chaos-serum">{translations[config.language].GAME.CURRENCY.CHAOS_SERUM}: { game.currency.chaosSerum }</div>
		</section>

		<section className="characters">
			
		</section> */}
	</main>
);

export default Ui;