import React from "react";
import PropTypes from "prop-types";

import "./Clicker.scss";

const Clicker = ({ counter, onClicker }) => (
	<div className="clicker">
		<button onClick={() => { onClicker(counter) }}>CLICK!</button>
	</div>
);

export default Clicker;