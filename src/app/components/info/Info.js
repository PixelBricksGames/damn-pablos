import React from "react";
import PropTypes from "prop-types";

import { IAgedClone } from "../../interfaces/aged-clones.interface";
import { translations } from "./../../units/translations";

import "./Info.scss";

const Info = ({ game, tools, agedClones, config }) => (
	<div className="info">
		<div>{translations[config.language].GAME.CLONES}: { game.clones }</div>
		<div>{translations[config.language].GAME.CLONES_PER_SECOND}: { game.clonesPerSecond }</div>
		{/* <div>{translations[config.language].TOOLS.AUTO_CLONE}: { tools.autoClone.units }</div>
		<div>{translations[config.language].TOOLS.AUTO_SERUM}: { tools.autoSerum.units }</div>
		<div>{translations[config.language].AGED_CLONES.CHILD}: {agedClones.child.units}</div>
		<div>{translations[config.language].AGED_CLONES.TEEN}: {agedClones.teen.units}</div>
		<div>{translations[config.language].AGED_CLONES.ADULT}: {agedClones.adult.units}</div>
		<div>{translations[config.language].AGED_CLONES.SENIOR}: {agedClones.senior.units}</div>
		<div>{translations[config.language].AGED_CLONES.ANCIENT}: {agedClones.ancient.units}</div> */}
	</div>
);

Info.propTypes = {
	// game: PropTypes.shape({}).isRequired
	// tools: PropTypes.shape({}).isRequired
	agedClones: PropTypes.shape({
		child: PropTypes.shape(IAgedClone).isRequired,
		teen: PropTypes.shape(IAgedClone).isRequired,
		adult: PropTypes.shape(IAgedClone).isRequired,
		senior: PropTypes.shape(IAgedClone).isRequired,
		ancient: PropTypes.shape(IAgedClone).isRequired
	}).isRequired,
	// config: PropTypes.shape({}).isRequired
};
export default Info;