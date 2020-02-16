import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Menu from "./Menu";

import { updateClonesPerSecond, spendMoney, deleteClones } from "../../store/actions/game.action";
import { addMoneySpend } from "./../../store/actions/stats.action";
import { createAutoClone, createAutoSerum } from "../../store/actions/tools.action";
import { killFetusClone } from "../../store/actions/clones/fetus.action";

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