import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../units/translations";

import "./Info.scss";

const Info = ({ language, clones, agedClones }) => (
	<div className="info">
		<div>{translations[language].game.clones}: { clones }</div>
		<div>{translations[language].aged_clones.child_clones}: {agedClones.child.units}</div>
		<div>{translations[language].aged_clones.teen_clones}: {agedClones.teen.units}</div>
		<div>{translations[language].aged_clones.adult_clones}: {agedClones.adult.units}</div>
		<div>{translations[language].aged_clones.senior_clones}: {agedClones.senior.units}</div>
		<div>{translations[language].aged_clones.ancient_clones}: {agedClones.ancient.units}</div>
	</div>
);

Info.propTypes = {
    clones: PropTypes.number.isRequired
};

export default Info;