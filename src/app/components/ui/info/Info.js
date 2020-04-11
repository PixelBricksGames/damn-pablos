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
				<div className="info-clones__amount--label">{translations[config.language].GAME.CURRENCY.CLONES}</div>
				<div className="info-clones__amount--number">{getCloneAmountFormated(game.currency.clones)}</div>
			</div>
			<div className="info-clones__per-second">
				<div className="info-clones__per-second--number">{game.clones.perSecond}</div>
				<div className="info-clones__per-second--label">{translations[config.language].GAME.CLONES_PER_SECOND}</div>
			</div>
		</article>

		<article className="info-menu">
			<button
				className={`info-menu__button ${ui.open ? 'opened' : 'closed'}`}
				onClick={ onClickMenu }>
					<div className={`notifications ${ui.notifications ? 'on' : 'off'}`}></div>
			</button>
		</article>
	</section>
);

const getCloneAmountFormated = (number) => {
	return number;
}

const getRiskLevelClass = (percentage) => {
	if(percentage >= 75) {
		return 'warning';
	} else {
		return '';
	}
}

export default Info;