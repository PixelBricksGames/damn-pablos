import React from "react";
import PropTypes from "prop-types";

import "./Laboratory.scss";

const Laboratory = ({ onClickClone }) => (
	<div className="laboratory">
		<button onClick={onClickClone}>CLICK!</button>
	</div>
);

Laboratory.propTypes = {
	onClickClone: PropTypes.func.isRequired
};

export default Laboratory;