import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Ui.scss";

// import PageButton from "./page-button/PageButton";

const Menu = ({
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
	
	<div className="info">
			<section className="wrapper--clones">
				<div className="info-clones">
					<div className="info-clones__amount">
						<span className="info-clones__amount--number">{ game.currency.clones }</span>
						<span className="info-clones__amount--label">{translations[config.language].GAME.CURRENCY.CLONES}</span>
					</div>
					<div className="info-clones__per-second">
						<span>{translations[config.language].GAME.CLONES_PER_SECOND}: </span>
						{ game.clones.perSecond }
					</div>
					<div className="info-clones__mutation">
					<span>{translations[config.language].GAME.RISK.MUTATION}: </span>
					{ game.risk.mutation + "%" }
					</div>
					<div className="info-clones__rebellion">
						<span>{translations[config.language].GAME.RISK.REBELLION}: </span>
						{ game.risk.rebellion + "%"  }
					</div>
				</div>
				
				<div className="info-menu">
					<button
						className={ `info-menu__button ${ui.open ? 'opened' : 'closed'}` }
						onClick={ onClickMenu }>
					</button>
				</div>
			</section>

			<section className="wrapper--currencies">
				<div className="info-currencies">
					<div className="info-currencies__money">{translations[config.language].GAME.CURRENCY.MONEY}: { game.currency.money }</div>
					<div className="info-currencies__aging-serum">{translations[config.language].GAME.CURRENCY.AGING_SERUM}: { game.currency.agingSerum }</div>
					<div className="info-currencies__anger-serum">{translations[config.language].GAME.CURRENCY.ANGER_SERUM}: { game.currency.angerSerum }</div>
					<div className="info-currencies__chaos-serum">{translations[config.language].GAME.CURRENCY.CHAOS_SERUM}: { game.currency.chaosSerum }</div>
				</div>
			</section>

			<section className="wrapper--characters">
				<div className="info-characters"></div>
			</section>
		</div>

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

export default Ui;