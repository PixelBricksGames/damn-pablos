import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Laboratory from "./Laboratory";

import { createFetusClone, killFetusClone } from "../../store/clones/fetus/fetus.action";
import { generateEnergy } from "../../store/game/game.action";
import { addClonesByClick } from "../../store/stats/stats.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	clones: {
		fetus: state.get("clones").get("fetus")
	},
	config: state.get("config")
});

const mapDispatchToProps = dispatch => ({
	onClickClone: (income) => dispatch(batchActions([
		createFetusClone(income.clones),
		addClonesByClick(income.clones),
		generateEnergy(income.energy)
	])),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);