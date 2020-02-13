import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Laboratory from "./Laboratory";

import { createFetusClone, killFetusClone } from "./../../store/actions/clones/fetus.action";
import { earnMoney } from "../../store/actions/game.action";

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
		createFetusClone(clones)
		//
	])),
	onClickSell: (clones, money) => dispatch(batchActions([
		killFetusClone(clones),
		earnMoney(money)
	])),
	onClickSerum: (clones, serum) => dispatch(batchActions([
		killFetusClone(clones)
		// earnMoney(money)
	])),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);