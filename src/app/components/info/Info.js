import React from "react";
import PropTypes from "prop-types";

import "./Info.scss";

const Info = ({ clones, agedClones }) => (
	<div className="info">
		<div>Clones: { clones }</div>
		<div>Child Clones: { agedClones.child.units }</div>
		<div>Teen Clones: { agedClones.teen.units }</div>
		<div>Adult Clones: { agedClones.adult.units }</div>
		<div>Senior Clones: { agedClones.senior.units }</div>
		<div>Ancient Clones: { agedClones.ancient.units }</div>
	</div>
);

Info.propTypes = {
    clones: PropTypes.number.isRequired
};

export default Info;