import React from "react";
import PropTypes from "prop-types";

import * as GameState from "./../../store/state/game.init";

import "./Laboratory.scss";

const Laboratory = ({ clones, clonesPerClick, onClickClone }) => (
	<div className="laboratory">
		<button onClick={() => { onClickClone(clones, clonesPerClick) }}>CLICK!</button>
	</div>
);

Laboratory.propTypes = {
	clones: PropTypes.number.isRequired,
	clonesPerClick: PropTypes.number.isRequired,
	onClickClone: PropTypes.func.isRequired
};

export default Laboratory;