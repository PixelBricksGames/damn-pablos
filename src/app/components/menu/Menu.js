import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Menu.scss";

import MenuButton from "./button/MenuButton";

const Menu = ({ game, tools, clones, config, ui, onClickAutoClone }) => (
	<div className={`menu ${ui.open ? 'open' : 'close'}`}>

		<div className={`menu__tab--clones ${ui.tabs.clones.open ? 'open' : 'close'}`}>CLONES</div>

		<div className={`menu__tab--tools ${ui.tabs.tools.open ? 'open' : 'close'}`}>
			<MenuButton
				title={ translations[config.language].TOOLS.AUTO_CLONE }
				amount={ tools.autoClone.amount }
				cost={ tools.autoClone.cost }
				enabled={ game.currency.money >= tools.autoClone.cost }
				onClick={() => { onClickAutoClone(tools.autoClone.cost) }}
			/>
		</div>

		<div className={`menu__tab--upgrades ${ui.tabs.upgrades.open ? 'open' : 'close'}`}>upgrades</div>

		<div className={`menu__tab--achievements ${ui.tabs.achievements.open ? 'open' : 'close'}`}>achievements</div>

		<div className={`menu__tab--stats ${ui.tabs.stats.open ? 'open' : 'close'}`}>stats</div>

		<div className={`menu__tab--config ${ui.tabs.config.open ? 'open' : 'close'}`}>config</div>

		<div className={`menu__tab--credits ${ui.tabs.credits.open ? 'open' : 'close'}`}>credits</div>

	</div>
);

Menu.propTypes = {
	onClickAutoClone: PropTypes.func.isRequired
};

export default Menu;