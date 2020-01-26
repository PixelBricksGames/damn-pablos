import React from "react";
import PropTypes from "prop-types";

import "./Clicker.scss";

const Clicker = ({ clones, clonesPerClick, onClickClone }) => (
	<div className="clicker">
		<button onClick={() => { onClickClone(clones, clonesPerClick) }}>CLICK!</button>
	</div>
);

Clicker.propTypes = {
	clones: PropTypes.number.isRequired,
	clonesPerClick: PropTypes.number.isRequired,
	onClickClone: PropTypes.func.isRequired,
};

export default Clicker;