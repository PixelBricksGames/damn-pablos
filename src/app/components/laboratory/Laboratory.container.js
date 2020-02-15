import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Laboratory from "./Laboratory";

import { createFetusClone, killFetusClone } from "./../../store/actions/clones/fetus.action";
import { earnMoney, earnAgingSerum } from "../../store/actions/game.action";
import { addClonesByClick, addClonesKilled, addClonesSold, addMoneyInTotal, addAgingSerumInTotal } from "./../../store/actions/stats.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	clones: {
		fetus: state.get("clones").get("fetus")
		// TODO
	},
	config: state.get("config")
});

const mapDispatchToProps = dispatch => ({
	onClickClone: (clones) => dispatch(batchActions([
		createFetusClone(clones),
		addClonesByClick(clones)
	])),
	onClickSell: (clones, money) => dispatch(batchActions([
		killFetusClone(clones),
		earnMoney(money),
		addClonesSold(clones),
		addMoneyInTotal(money)
	])),
	onClickSerum: (clones, serum) => dispatch(batchActions([
		killFetusClone(clones),
		earnAgingSerum(serum),
		addClonesKilled(clones),
		addAgingSerumInTotal(money)
	])),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);