import React from "react";
import PropTypes from "prop-types";

import "./Risk.scss";

const assetsPath = './../../../../assets/images/';

const Risk = ({ name, percentage }) => (
	<div className="risk">
		<section className="risk__label">
			<div className="label--left"></div>
			<div className="label--center">{ name }</div>
			<div className="label--right"></div>
		</section>
		<section className="risk__percentage">
			<div className="percentage" style={{ width: `${percentage}%` }}></div>
		</section>
	</div>
);

export default Risk;