import React from "react";

import { translations } from "../../../../../units/translations";

import "../Page.scss";
import MenuButton from "../button/MenuButton";

const PageClones = ({ game, clones, config, onClickFetus }) => (
	<div className="page-clones">
		<div className="page__title">{translations[config.language].GAME.PAGES.CLONES}</div>
		<MenuButton
			id={ clones.fetus.id }
			title={ translations[config.language].CLONES.FETUS }
			amount={ clones.fetus.amount }
			cost={ clones.fetus.cost }
			unlocked={ true }
			enabled={ true }
			onClick={() => { onClickFetus(game.clones.perClick) }}
		/>
	</div>
);

export default PageClones;