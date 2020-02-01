import React from "react";
import PropTypes from "prop-types";

import { IAgedClone } from "../../interfaces/aged-clones.interface";

import "./Menu.scss";

const Menu = ({
		child,
		teen,
		adult,
		senior,
		ancient,
		onClickChildClone,
		onClickTeenClone,
		onClickAdultClone,
		onClickSeniorClone,
		onClickAncientClone
	}) => (
	<div className="menu">
		<button onClick={() => { onClickCronjob() }}>Cronjob</button>
		<button onClick={() => { onClickChildClone(child.price) }}>Child</button>
		<button onClick={() => { onClickTeenClone(teen.price) }}>Teen</button>
		<button onClick={() => { onClickAdultClone(adult.price) }}>Adult</button>
		<button onClick={() => { onClickSeniorClone(senior.price) }}>Senior</button>
		<button onClick={() => { onClickAncientClone(ancient.price) }}>Ancient</button>
	</div>
);

Menu.propTypes = {
	child: PropTypes.shape(IAgedClone).isRequired,
	teen: PropTypes.shape(IAgedClone).isRequired,
	adult: PropTypes.shape(IAgedClone).isRequired,
	senior: PropTypes.shape(IAgedClone).isRequired,
	ancient: PropTypes.shape(IAgedClone).isRequired,
	onClickChildClone: PropTypes.func.isRequired,
	onClickTeenClone: PropTypes.func.isRequired,
	onClickAdultClone: PropTypes.func.isRequired,
	onClickSeniorClone: PropTypes.func.isRequired,
	onClickAncientClone: PropTypes.func.isRequired
};

export default Menu;