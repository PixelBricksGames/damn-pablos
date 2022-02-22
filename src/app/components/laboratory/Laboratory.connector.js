import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Laboratory from "./Laboratory";

import { createFetusClone, killFetusClone } from "../../store/clones/fetus/fetus.action";
import { generateEnergy } from "../../store/game/game.action";
import { addClonesByClick } from "../../store/stats/stats.action";
import { setCapsuleVatFetusCreation } from "../../store/animations/animations.action";

const mapStateToProps = state => ({
	time: state.get("time"),
	animations: state.get("animations"),
	game: state.get("game"),
	config: state.get("config"),
	clones: {
		fetus: state.get("clones").get("fetus")
	},
});

const mapDispatchToProps = dispatch => ({
	onClickClone: (income) => dispatch(batchActions([
		createFetusClone(income.clones),
		addClonesByClick(income.clones),
		generateEnergy(income.energy),
		setCapsuleVatFetusCreation(),
	])),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);