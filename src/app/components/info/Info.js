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
			<div>{translations[config.language].GAME.MONEY}: { game.currency.money }</div>
			<div>{translations[config.language].TOOLS.AUTO_CLONE}: { tools.autoClone.amount }</div>
		</div>
	);
};

Info.propTypes = {
};
export default Info;