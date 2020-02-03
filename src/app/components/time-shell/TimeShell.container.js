import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import TimeShell from "./TimeShell";

import { updateTimer } from "../../store/actions/time.action";
import { updateGame } from "../../store/actions/game.action";

let state;
const mapStateToProps = state => {
	state = {
		game: state.get("game"),
		tools: state.get("tools"),
		agedClones: state.get("agedClones"),
		specialClones: state.get("specialClones"),
		config: state.get("configuration")
	};
	return {};
};

const mapDispatchToProps = dispatch => ({
	updateGame: (delta) => dispatch(batchActions([
		updateTimer(delta),
		updateGame(state)
	])),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TimeShell);