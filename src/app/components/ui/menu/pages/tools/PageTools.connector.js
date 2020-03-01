import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import PageTools from "./PageTools";

import { spendMoney } from "../../../../../store/game/game.action";
import { createAutoClone, createAutoSell, createAutoSerum } from "../../../../../store/tools/tools.action";
import { addMoneySpend } from "../../../../../store/stats/stats.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	tools: state.get("tools"),
	config: state.get("config")
});

const mapDispatchToProps = dispatch => ({
	onClickAutoClone: (money) => dispatch(batchActions([
		createAutoClone(),
		spendMoney(money),
		addMoneySpend(money)
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageTools);