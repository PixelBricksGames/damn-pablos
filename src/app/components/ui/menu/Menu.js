import React from "react";
import PropTypes from "prop-types";

import { translations } from "../../../units/translations";
import * as CONSTANST from "../../../units/constants";

import "./Menu.scss";

import MenuTab from "./tab/MenuTab";
import PageToolsConnector from "./pages/tools/PageTools.connector";

const buildTabs = (ui, tabList) => (
	tabList.map((tab) => (<MenuTab key={ tab[0] } name={ tab[0] } isSelected={ ui.pages[tab[0]].open } onClick={ tab[1] }/>))
);

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
}) => {
	const pageList = [
		[CONSTANST.MENU_PAGES.CLONES, onClickTabClones],
		[CONSTANST.MENU_PAGES.TOOLS, onClickTabTools],
		[CONSTANST.MENU_PAGES.UPGRADES, onClickTabUpgrades],
		[CONSTANST.MENU_PAGES.STATS, onClickTabStats],
		[CONSTANST.MENU_PAGES.ACHIEVEMENTS, onClickTabAchievements],
		[CONSTANST.MENU_PAGES.CONFIG, onClickTabConfig],
		[CONSTANST.MENU_PAGES.CREDITS, onClickTabCredits],
	];
	return (
		<section className={`menu ${ui.open ? 'open' : 'close'}`}>
			<div className="menu-structure">
				<section className="tabs">
					{ buildTabs(ui, pageList) }
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
}

export default Menu;