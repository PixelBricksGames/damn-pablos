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
import { setAssistantFaceExpression, setAssistantTalking } from "../../../store/animations/animations.action";

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
		setAssistantFaceExpression(ASSISTANT.FACE_EXPRESSION.NORMAL)
	])),
	onClickTabAchievements: () => dispatch(batchActions([
		selectAchievementsTab(),
		clearAchievementsTabNotifications(),
		setAssistantFaceExpression(ASSISTANT.FACE_EXPRESSION.SERIOUS)
	])),
	onClickTabStats: () => dispatch(batchActions([
		selectStatsTab(),
		clearStatsTabNotifications(),
		setAssistantFaceExpression(ASSISTANT.FACE_EXPRESSION.ANGRY)
	])),
	onClickTabConfig: () => dispatch(batchActions([
		selectConfigTab(),
		clearConfigTabNotifications(),
		setAssistantFaceExpression(ASSISTANT.FACE_EXPRESSION.SURPRISE)
	])),
	onClickTabCredits: () => dispatch(batchActions([
		selectCreditsTab(),
		clearCreditsTabNotifications(),
		setAssistantFaceExpression(ASSISTANT.FACE_EXPRESSION.DOUBT)
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);