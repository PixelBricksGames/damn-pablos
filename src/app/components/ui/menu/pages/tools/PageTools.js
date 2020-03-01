import React from "react";

import { translations } from "../../../../../units/translations";

import "../Page.scss";

import MenuButton from "../button/MenuButton";

const PageTools = ({ game, tools, config, onClickAutoClone }) => (
	<div className="page">
		<div className="page__title">{translations[config.language].GAME.PAGES.TOOLS}</div>
		<MenuButton
			title={ translations[config.language].TOOLS.AUTO_CLONE }
			amount={ tools.autoClone.amount }
			cost={ tools.autoClone.cost }
			enabled={ game.currency.money >= tools.autoClone.cost }
			onClick={() => { onClickAutoClone(tools.autoClone.cost) }}
		/>
	</div>
);

export default PageTools;