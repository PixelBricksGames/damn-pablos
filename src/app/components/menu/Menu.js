import React from "react";
import PropTypes from "prop-types";

import { IClones } from "../../interfaces/clones.interface";
import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Menu.scss";

import MenuButton from "./button/MenuButton";

const Menu = ({
		tools,
		clones,
		config,
		onClickAutoClone
	}) => (
	<div className="menu">
		<MenuButton
			id={ CONSTANST.TOOLS.AUTO_CLONE }
			title={ translations[config.language].TOOLS.AUTO_CLONE }
			amount={ tools.autoClone.amount }
			cost={ tools.autoClone.cost.clones }
			unlocked={ true }
			enabled={ tools.autoClone.active && (clones.fetus.amount >= tools.autoClone.cost.clones) }
			onClick={() => { onClickAutoClone(tools.autoClone) }}
		/>
	</div>
);

Menu.propTypes = {
	onClickAutoClone: PropTypes.func.isRequired
};

export default Menu;