import React from "react";
import PropTypes from "prop-types";

import { translations } from "../../../units/translations";
import * as CONSTANST from "../../../units/constants";

import "./Menu.scss";

import PageToolsConnector from "./pages/tools/PageTools.connector";

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
	onClickTabCredits
}) => (
	<section className={`menu ${ui.open ? 'open' : 'close'}`}>
		<div className="menu-structure">
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
				<button className={ `tab__stats ${ui.pages.stats.open ? 'selected' : 'unselected'}` }
					onClick={ onClickTabStats }>
				</button>
				<button className={ `tab__achievements ${ui.pages.achievements.open ? 'selected' : 'unselected'}` }
					onClick={ onClickTabAchievements }>
				</button>
				<button className={ `tab__config ${ui.pages.config.open ? 'selected' : 'unselected'}` }
					onClick={ onClickTabConfig }>
				</button>
				<button className={ `tab__credits ${ui.pages.credits.open ? 'selected' : 'unselected'}` }
					onClick={ onClickTabCredits }>
				</button>
			</section>

			<section className="page">
				<div className={`page__clones ${ui.pages.clones.open ? 'open' : 'close'}`}>
					<div className="page__title">{translations[config.language].GAME.PAGES.CLONES}</div>
				</div>
				<div className={`page__tools ${ui.pages.tools.open ? 'open' : 'close'}`}>
					<PageToolsConnector />
				</div>
				<div className={`page__upgrades ${ui.pages.upgrades.open ? 'open' : 'close'}`}>
					<div className="page__title">{translations[config.language].GAME.PAGES.UPGRADES}</div>
				</div>
				<div className={`page__achievements ${ui.pages.achievements.open ? 'open' : 'close'}`}>
					<div className="page__title">{translations[config.language].GAME.PAGES.ACHIEVEMENTS}</div>
				</div>
				<div className={`page__stats ${ui.pages.stats.open ? 'open' : 'close'}`}>
					<div className="page__title">{translations[config.language].GAME.PAGES.STATS}</div>
				</div>
				<div className={`page__config ${ui.pages.config.open ? 'open' : 'close'}`}>
					<div className="page__title">{translations[config.language].GAME.PAGES.CONFIG}</div>
				</div>
				<div className={`page__credits ${ui.pages.credits.open ? 'open' : 'close'}`}>
					<div className="page__title">{translations[config.language].GAME.PAGES.CREDITS}</div>
				</div>
			</section>
		</div>
	</section>
);

export default Menu;