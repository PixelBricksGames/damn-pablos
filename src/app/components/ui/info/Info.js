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
			{/* <div className="info-clones__risk">
				<div className={`risk__mutation ${getRiskLevelClass(game.risk.mutation)}`}>
					<span className="risk__mutation--label">{translations[config.language].GAME.RISK.MUTATION}: </span>
					<span className="risk__mutation--number">{ game.risk.mutation + "%" }</span>
				</div>
				<div className={`risk__rebellion ${getRiskLevelClass(game.risk.rebellion)}`}>
					<span className="risk__rebellion--label">{translations[config.language].GAME.RISK.REBELLION}: </span>
					<span className="risk__rebellion--label">{ game.risk.rebellion + "%"  }</span>
				</div>
			</div> */}
		</article>

		<article className="info-menu">
			<button
				className={`info-menu__button ${ui.open ? 'opened' : 'closed'}`}
				onClick={ onClickMenu }>
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