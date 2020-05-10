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
			enabled={ true }
			unlocked={ true }
			onClick={() => { onClickFetus(game.clones.perClick) }}
		/>
	</div>
);

const getAffordability = (cost, resources) => {
	let affordable = true;
	Object.keys(cost).forEach((key, index) => {
		if(key === "room") {
			console.log(key + " cost[key]", cost[key]);
			console.log(key + " resources[key]", resources[key]);
			console.log(key + " cost[key] > resources[key]", cost[key] > resources[key]);
			if(affordable && resources[key] && (cost[key] > resources[key])) {
				console.log('DENTRO');
				affordable = false;
			}
		}
	});
	return affordable;
}

export default PageClones;