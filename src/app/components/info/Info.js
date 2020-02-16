import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../units/translations";

import "./Info.scss";

const Info = ({ game, tools, clones, config }) => {
	return (
		<div className="info">
			<section className="wrapper--clones">
				<div className="info-clones">
					<div className="info-clones__amount">
						<span className="info-clones__amount--number">{ game.currency.clones }</span>
						<span className="info-clones__amount--label">{translations[config.language].GAME.CURRENCY.CLONES}</span>
					</div>
					<div className="info-clones__per-second">
						<span>{translations[config.language].GAME.CLONES_PER_SECOND}: </span>
						{ game.clones.perSecond }
					</div>
					<div className="info-clones__mutation">
					<span>{translations[config.language].GAME.RISK.MUTATION}: </span>
					{ game.risk.mutation + "%" }
					</div>
					<div className="info-clones__rebellion">
						<span>{translations[config.language].GAME.RISK.REBELLION}: </span>
						{ game.risk.rebellion + "%"  }
					</div>
				</div>
			</section>

			<section className="wrapper--currencies">
				<div className="info-currencies">
					<div className="info-currencies__money">{translations[config.language].GAME.CURRENCY.MONEY}: { game.currency.money }</div>
					<div className="info-currencies__aging-serum">{translations[config.language].GAME.CURRENCY.AGING_SERUM}: { game.currency.agingSerum }</div>
					<div className="info-currencies__anger-serum">{translations[config.language].GAME.CURRENCY.ANGER_SERUM}: { game.currency.angerSerum }</div>
					<div className="info-currencies__chaos-serum">{translations[config.language].GAME.CURRENCY.CHAOS_SERUM}: { game.currency.chaosSerum }</div>
				</div>
			</section>
		</div>
	);
};

export default Info;