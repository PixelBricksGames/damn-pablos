import React from "react";
import PropTypes from "prop-types";

import * as GameState from "./../../store/state/game.init";

import "./Laboratory.scss";

const Laboratory = ({ clonesPerClick, onClickClone }) => (
	<div className="laboratory">
		<button onClick={() => { onClickClone(clonesPerClick) }}>CLICK!</button>
	</div>
);

Laboratory.propTypes = {
	clonesPerClick: PropTypes.number.isRequired,
	onClickClone: PropTypes.func.isRequired
};

export default Laboratory;