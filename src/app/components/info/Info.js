import React from "react";
import PropTypes from "prop-types";

import "./Info.scss";

const Info = ({ clones, agedClones }) => (
	<div className="info">
		<div>Clones: { clones }</div>
		<div>Child Clones: { agedClones.child }</div>
		<div>Teen Clones: { agedClones.teen }</div>
		<div>Adult Clones: { agedClones.adult }</div>
		<div>Senior Clones: { agedClones.senior }</div>
		<div>Ancient Clones: { agedClones.ancient }</div>
	</div>
);

Info.propTypes = {
    clones: PropTypes.number.isRequired
};

export default Info;