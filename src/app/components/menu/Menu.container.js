import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Menu from "./Menu";

import { updateClonesPerSecond } from "../../store/actions/game.action";

import { spendMoney } from "../../store/actions/game.action";
import { deleteClones } from "../../store/actions/game.action";

import { createAutoClone } from "../../store/actions/tools.action";
import { createAutoSerum } from "../../store/actions/tools.action";

import { killFetusClone } from "../../store/actions/clones/fetus.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	tools: state.get("tools"),
	clones: {
		fetus: state.get("clones").get("fetus")
		// TODO
	},
	config: state.get("config")
});

const mapDispatchToProps = dispatch => ({
	onClickAutoClone: (cost) => dispatch(batchActions([
		createAutoClone(),
		spendMoney(cost)
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);