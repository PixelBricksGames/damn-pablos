import React from "react";
import PropTypes from "prop-types";

import "./Counter.scss";

const Counter = ({ counter }) => (
	<div className="counter">
		{ counter }
	</div>
);

Counter.propTypes = {
    counter: PropTypes.number.isRequired
};

export default Counter;