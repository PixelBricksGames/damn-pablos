import React from "react";
import PropTypes from "prop-types";

import { translations } from "../../../units/translations";

import "./Info.scss";

const Info = ({
	game,
	ui,
	config,
	clones,
	tools,
	onClickMenu
}) => (
	<section className="info">
		<article className="info-clones">
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
		</article>

		<article className="info-menu">
			<button
				className={`info-menu__button ${ui.open ? 'opened' : 'closed'}`}
				onClick={ onClickMenu }>
			</button>
		</article>
	</section>
);

export default Info;