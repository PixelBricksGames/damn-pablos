import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Menu from "./Menu";

import {
	selectClonesTab, clearClonesTabNotifications,
	selectToolsTab, clearToolsTabNotifications,
	selectUpgradesTab, clearUpgradesTabNotifications,
	selectAchievementsTab, clearAchievementsTabNotifications,
	selectStatsTab, clearStatsTabNotifications,
	selectConfigTab, clearConfigTabNotifications,
	selectCreditsTab, clearCreditsTabNotifications,
} from "../../../store/ui/ui.action";

import { ASSISTANT } from "../../../units/animations";
import { setAssistantFace, setAssistantBody, setAssistantTalking } from "../../../store/animations/animations.action";

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
		clearClonesTabNotifications(),
		setAssistantTalking(false)
	])),
	onClickTabTools: () => dispatch(batchActions([
		selectToolsTab(),
		clearToolsTabNotifications(),
		setAssistantTalking(true)
	])),
	onClickTabUpgrades: () => dispatch(batchActions([
		selectUpgradesTab(),
		clearUpgradesTabNotifications(),
		setAssistantFace(ASSISTANT.FACE.NORMAL)
	])),
	onClickTabStats: () => dispatch(batchActions([
		selectStatsTab(),
		clearStatsTabNotifications(),
		setAssistantBody(ASSISTANT.BODY.IDLE)
	])),
	onClickTabAchievements: () => dispatch(batchActions([
		selectAchievementsTab(),
		clearAchievementsTabNotifications(),
		setAssistantBody(ASSISTANT.BODY.POINTING)
	])),
	onClickTabConfig: () => dispatch(batchActions([
		selectConfigTab(),
		clearConfigTabNotifications(),
		setAssistantBody(ASSISTANT.BODY.EXPLAINING)
	])),
	onClickTabCredits: () => dispatch(batchActions([
		selectCreditsTab(),
		clearCreditsTabNotifications(),
		setAssistantFace(ASSISTANT.FACE.DOUBT),
		setAssistantBody(ASSISTANT.BODY.DUNNO)
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);