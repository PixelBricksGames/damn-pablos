import React from "react";
import PropTypes from "prop-types";

import { IClones } from "../../interfaces/clones.interface";
import { translations } from "./../../units/translations";

import "./Info.scss";

const Info = ({ game, tools, clones, config }) => {
	return (
		<div className="info">
			<div>{translations[config.language].GAME.CLONES}: { clones.fetus.amount }</div>
			<div>{translations[config.language].GAME.CLONES_PER_SECOND}: { game.clonesPerSecond }</div>
			<div>{translations[config.language].TOOLS.AUTO_CLONE}: { tools.autoClone.amount }</div>
			{/* <div>{translations[config.language].TOOLS.AUTO_SERUM}: { tools.autoSerum.amount }</div>
			<div>{translations[config.language].AGED_CLONES.CHILD}: {clones.child.amount}</div>
			<div>{translations[config.language].AGED_CLONES.TEEN}: {clones.teen.amount}</div>
			<div>{translations[config.language].AGED_CLONES.ADULT}: {clones.adult.amount}</div>
			<div>{translations[config.language].AGED_CLONES.SENIOR}: {clones.senior.amount}</div>
			<div>{translations[config.language].AGED_CLONES.ANCIENT}: {clones.ancient.amount}</div> */}
		</div>
	);
};

Info.propTypes = {
	// game: PropTypes.shape({}).isRequired
	// tools: PropTypes.shape({}).isRequired
	// clones: PropTypes.shape({
	// 	fetus: PropTypes.shape(IClones).isRequired,
	// 	child: PropTypes.shape(IClones).isRequired,
	// 	teen: PropTypes.shape(IClones).isRequired,
	// 	adult: PropTypes.shape(IClones).isRequired,
	// 	senior: PropTypes.shape(IClones).isRequired,
	// 	ancient: PropTypes.shape(IClones).isRequired
	// }).isRequired,
	// config: PropTypes.shape({}).isRequired
};
export default Info;