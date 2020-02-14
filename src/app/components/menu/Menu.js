import React from "react";
import PropTypes from "prop-types";

import { IClones } from "../../interfaces/clones.interface";
import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Menu.scss";

import MenuButton from "./button/MenuButton";

const Menu = ({ game, tools, clones, config, onClickAutoClone }) => (
	<div className="menu">
		<MenuButton
			title={ translations[config.language].TOOLS.AUTO_CLONE }
			amount={ tools.autoClone.amount }
			cost={ tools.autoClone.cost }
			enabled={ game.currency.money >= tools.autoClone.cost }
			onClick={() => { onClickAutoClone(tools.autoClone.cost) }}
		/>
	</div>
);

Menu.propTypes = {
	onClickAutoClone: PropTypes.func.isRequired
};

export default Menu;