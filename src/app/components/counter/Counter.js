import React from "react";
import PropTypes from "prop-types";

import "./Counter.scss";

const Counter = ({ clones }) => (
	<div className="counter">
		{ clones }
	</div>
);

Counter.propTypes = {
    clones: PropTypes.number.isRequired
};

export default Counter;