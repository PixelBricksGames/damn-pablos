import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Menu.scss";

import MenuButton from "./button/MenuButton";

const Menu = ({
	game,
	tools,
	clones,
	config,
	ui,
	onClickTabClones,
	onClickTabTools,
	onClickTabUpgrades,
	onClickTabAchievements,
	onClickTabStats,
	onClickTabConfig,
	onClickTabCredits,
	onClickAutoClone
}) => (
	<div className={`menu ${ui.open ? 'open' : 'close'}`}>
		<section className="tab">
			<button className={ `tab__clones ${ui.pages.clones.open ? 'selected' : 'unselected'}` }
				onClick={ onClickTabClones }>
			</button>
			<button className={ `tab__tools ${ui.pages.tools.open ? 'selected' : 'unselected'}` }
				onClick={ onClickTabTools }>
			</button>
			<button className={ `tab__upgrades ${ui.pages.upgrades.open ? 'selected' : 'unselected'}` }
				onClick={ onClickTabUpgrades }>
			</button>
			<button className={ `tab__achievements ${ui.pages.achievements.open ? 'selected' : 'unselected'}` }
				onClick={ onClickTabAchievements }>
			</button>
			<button className={ `tab__stats ${ui.pages.stats.open ? 'selected' : 'unselected'}` }
				onClick={ onClickTabStats }>
			</button>
			<button className={ `tab__config ${ui.pages.config.open ? 'selected' : 'unselected'}` }
				onClick={ onClickTabConfig }>
			</button>
			<button className={ `tab__credits ${ui.pages.credits.open ? 'selected' : 'unselected'}` }
				onClick={ onClickTabCredits }>
			</button>
		</section>

		<section className="page">
			<div className={`page__clones ${ui.pages.clones.open ? 'open' : 'close'}`}>CLONES</div>
			<div className={`page__tools ${ui.pages.tools.open ? 'open' : 'close'}`}>
				<MenuButton
					title={ translations[config.language].TOOLS.AUTO_CLONE }
					amount={ tools.autoClone.amount }
					cost={ tools.autoClone.cost }
					enabled={ game.currency.money >= tools.autoClone.cost }
					onClick={() => { onClickAutoClone(tools.autoClone.cost) }}
				/>
			</div>
			<div className={`page__upgrades ${ui.pages.upgrades.open ? 'open' : 'close'}`}>upgrades</div>
			<div className={`page__achievements ${ui.pages.achievements.open ? 'open' : 'close'}`}>achievements</div>
			<div className={`page__stats ${ui.pages.stats.open ? 'open' : 'close'}`}>stats</div>
			<div className={`page__config ${ui.pages.config.open ? 'open' : 'close'}`}>config</div>
			<div className={`page__credits ${ui.pages.credits.open ? 'open' : 'close'}`}>credits</div>
		</section>
	</div>
);

Menu.propTypes = {
	onClickAutoClone: PropTypes.func.isRequired
};

export default Menu;