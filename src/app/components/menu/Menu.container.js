import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Menu from "./Menu";

import { updateClonesPerSecond, spendMoney, deleteClones } from "../../store/actions/game.action";
import { addMoneySpend } from "./../../store/actions/stats.action";
import { createAutoClone, createAutoSerum } from "../../store/actions/tools.action";
import { killFetusClone } from "../../store/actions/clones/fetus.action";
import {
	selectClonesTab, clearClonesTabNotifications,
	selectToolsTab, clearToolsTabNotifications,
	selectUpgradesTab, clearUpgradesTabNotifications,
	selectAchievementsTab, clearAchievementsTabNotifications,
	selectStatsTab, clearStatsTabNotifications,
	selectConfigTab, clearConfigTabNotifications,
	selectCreditsTab, clearCreditsTabNotifications,
} from "../../store/actions/ui.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	tools: state.get("tools"),
	clones: {
		fetus: state.get("clones").get("fetus")
		// TODO
	},
	config: state.get("config"),
	ui: state.get("ui"),
});

const mapDispatchToProps = dispatch => ({
	onClickTabClones: () => dispatch(batchActions([
		selectClonesTab(),
		clearClonesTabNotifications()
	])),
	onClickTabTools: () => dispatch(batchActions([
		selectToolsTab(),
		clearToolsTabNotifications()
	])),
	onClickTabUpgrades: () => dispatch(batchActions([
		selectUpgradesTab(),
		clearUpgradesTabNotifications()
	])),
	onClickTabAchievements: () => dispatch(batchActions([
		selectAchievementsTab(),
		clearAchievementsTabNotifications()
	])),
	onClickTabStats: () => dispatch(batchActions([
		selectStatsTab(),
		clearStatsTabNotifications()
	])),
	onClickTabConfig: () => dispatch(batchActions([
		selectConfigTab(),
		clearConfigTabNotifications()
	])),
	onClickTabCredits: () => dispatch(batchActions([
		selectCreditsTab(),
		clearCreditsTabNotifications()
	])),
	onClickAutoClone: (money) => dispatch(batchActions([
		createAutoClone(),
		spendMoney(money),
		addMoneySpend(money)
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);