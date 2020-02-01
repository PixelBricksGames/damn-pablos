import React from "react";
import PropTypes from "prop-types";

import "./Menu.scss";

const Menu = ({ onClickChildClone, onClickTeenClone, onClickAdultClone, onClickSeniorClone, onClickAncientClone }) => (
	<div className="menu">
		<button onClick={() => { onClickChildClone() }}>Child</button>
		<button onClick={() => { onClickTeenClone() }}>Teen</button>
		<button onClick={() => { onClickAdultClone() }}>Adult</button>
		<button onClick={() => { onClickSeniorClone() }}>Senior</button>
		<button onClick={() => { onClickAncientClone() }}>Ancient</button>
	</div>
);

Menu.propTypes = {
	onClickChildClone: PropTypes.func.isRequired,
	onClickTeenClone: PropTypes.func.isRequired,
	onClickAdultClone: PropTypes.func.isRequired,
	onClickSeniorClone: PropTypes.func.isRequired,
	onClickAncientClone: PropTypes.func.isRequired
};

export default Menu;