import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import PageClones from "./PageClones";

import { spendMoney } from "../../../../../store/game/game.action";
import { createFetusClone } from "../../../../../store/clones/fetus/fetus.action";
import { addClonesByClick } from "../../../../../store/stats/stats.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	clones: {
		fetus: state.get("clones").get("fetus")
		// TODO
	},
	config: state.get("config")
});

const mapDispatchToProps = dispatch => ({
	onClickFetus: (clones) => dispatch(batchActions([
		createFetusClone(clones),
		addClonesByClick(clones)
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageClones);