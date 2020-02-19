import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Ui.scss";

import UiInfo from "./info/UiInfo";
import UiMenu from "./menu/UiMenu";

const Ui = ({
	game,
	tools,
	clones,
	config,
	ui,
	onClickMenu,
	onClickTabClones,
	onClickTabTools,
	onClickTabUpgrades,
	onClickTabAchievements,
	onClickTabStats,
	onClickTabConfig,
	onClickTabCredits,
	onClickAutoClone
}) => (
	<div className="ui">

		<UiInfo
			game={game}
			language={config.language}
			isOpenMenu={ui.open}
			onClickMenu={onClickMenu} />

		<UiMenu
			game={game}
			ui={ui}
			language={config.language}
			clones={clones}
			tools={tools}
			onClickTabClones={onClickTabClones}
			onClickTabTools={onClickTabTools}
			onClickTabUpgrades={onClickTabUpgrades}
			onClickTabAchievements={onClickTabAchievements}
			onClickTabStats={onClickTabStats}
			onClickTabConfig={onClickTabConfig}
			onClickTabCredits={onClickTabCredits}
			onClickAutoClone={onClickAutoClone} />

		<section className="currencies">
			<div className="info-currencies__money">{translations[config.language].GAME.CURRENCY.MONEY}: { game.currency.money }</div>
			<div className="info-currencies__aging-serum">{translations[config.language].GAME.CURRENCY.AGING_SERUM}: { game.currency.agingSerum }</div>
			<div className="info-currencies__anger-serum">{translations[config.language].GAME.CURRENCY.ANGER_SERUM}: { game.currency.angerSerum }</div>
			<div className="info-currencies__chaos-serum">{translations[config.language].GAME.CURRENCY.CHAOS_SERUM}: { game.currency.chaosSerum }</div>
		</section>

		<section className="characters">
			
		</section>

	</div>
);

export default Ui;