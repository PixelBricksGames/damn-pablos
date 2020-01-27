import React from "react";
import PropTypes from "prop-types";

import { AGED_CLONES } from "./../../units/constants";
import "./Menu.scss";

const Menu = ({ onClickAgedClone }) => (
	<div className="menu">
		<button onClick={() => { onClickAgedClone(AGED_CLONES.CHILD) }}>Child</button>
		<button onClick={() => { onClickAgedClone(AGED_CLONES.TEEN) }}>Teen</button>
		<button onClick={() => { onClickAgedClone(AGED_CLONES.ADULT) }}>Adult</button>
		<button onClick={() => { onClickAgedClone(AGED_CLONES.SENIOR) }}>Senior</button>
		<button onClick={() => { onClickAgedClone(AGED_CLONES.ANCIENT) }}>Ancient</button>
	</div>
);

Menu.propTypes = {
	onClickAgedClone: PropTypes.func.isRequired
};

export default Menu;