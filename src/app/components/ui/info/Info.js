import React from "react";
import PropTypes from "prop-types";

import { translations } from "../../../units/translations";
import { getTwoDecimals } from "../../../utils/utils";

import "./Info.scss";
import Resource from "./resource/Resource";

const Info = ({
	game,
	ui,
	config,
	clones,
	tools,
	onClickMenu
}) => (
	<section className="info">
		{ console.log("game", game.resources.room) }
		<article className="info__resources">
			<Resource
				className="resource"
				name="room"
				value={ game.resources.room.used }
				total={ game.resources.room.total }
			/>
			<Resource
				className="resource"
				name="energy"
				value={ game.resources.energy.used }
				total={ game.resources.energy.total }
			/>

		</article>

		{/* <article className="info-clones">
			<div className="info-clones__amount">
				<div className="info-clones__amount--label">{translations[config.language].GAME.RESOURCES.CLONES}</div>
				<div className="info-clones__amount--number">{getCloneAmountFormated(game.currency.clones)}</div>
			</div>
			<div className="info-clones__per-second">
				<div className="info-clones__per-second--number">{game.clones.perSecond}</div>
				<div className="info-clones__per-second--label">{translations[config.language].GAME.CLONES_PER_SECOND}</div>
			</div>
		</article> */}

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