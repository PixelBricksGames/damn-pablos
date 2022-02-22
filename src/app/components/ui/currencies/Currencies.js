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
			<div className="currencies__money">{translations[config.language].GAME.RESOURCES.MONEY}: { game.resources.money }</div>
			<div className="currencies__aging-serum">{translations[config.language].GAME.RESOURCES.AGING_SERUM}: { game.resources.agingSerum }</div>
			<div className="currencies__anger-serum">{translations[config.language].GAME.RESOURCES.ANGER_SERUM}: { game.resources.angerSerum }</div>
			<div className="currencies__chaos-serum">{translations[config.language].GAME.RESOURCES.CHAOS_SERUM}: { game.resources.chaosSerum }</div>
		</section>
	</div>
);

export default Currencies;