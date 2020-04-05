import React from "react";
import PropTypes from "prop-types";

import { translations } from "../../../units/translations";

import "./Currencies.scss";
import Risk from "./risk/Risk";

const Currencies = ({
	game,
	config
}) => (
	<div className="currencies-wrapper">
		<section className="risks">
			<Risk name={ "Risk of Mutation "} percentage={ game.risk.mutation } />
			<Risk name={ "Risk of Rebellion "} percentage={ game.risk.rebellion } />
		</section>
		<section className="currencies">
			<div className="currencies__money">{translations[config.language].GAME.CURRENCY.MONEY}: { game.currency.money }</div>
			<div className="currencies__aging-serum">{translations[config.language].GAME.CURRENCY.AGING_SERUM}: { game.currency.agingSerum }</div>
			<div className="currencies__anger-serum">{translations[config.language].GAME.CURRENCY.ANGER_SERUM}: { game.currency.angerSerum }</div>
			<div className="currencies__chaos-serum">{translations[config.language].GAME.CURRENCY.CHAOS_SERUM}: { game.currency.chaosSerum }</div>
		</section>
	</div>
);

export default Currencies;