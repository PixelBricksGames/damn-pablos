import React from "react";
import PropTypes from "prop-types";

import { IAgedClone } from "../../interfaces/aged-clones.interface";
import { translations } from "./../../units/translations";

import "./Info.scss";

const Info = ({ game, agedClones, config }) => (
	<div className="info">
		<div>{translations[config.language].game.clones}: { game.clones }</div>
		<div>{translations[config.language].aged_clones.child_clones}: {agedClones.child.units}</div>
		<div>{translations[config.language].aged_clones.teen_clones}: {agedClones.teen.units}</div>
		<div>{translations[config.language].aged_clones.adult_clones}: {agedClones.adult.units}</div>
		<div>{translations[config.language].aged_clones.senior_clones}: {agedClones.senior.units}</div>
		<div>{translations[config.language].aged_clones.ancient_clones}: {agedClones.ancient.units}</div>
	</div>
);

Info.propTypes = {
	// game: PropTypes.shape({}).isRequired
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