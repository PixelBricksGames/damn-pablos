import { connect } from "react-redux";
import TimeShell from "./TimeShell";

import { updateTimer } from "../../store/actions/time.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	tools: state.get("tools"),
	agedClones: state.get("agedClones"),
	specialClones: state.get("specialClones"),
	config: state.get("configuration")
});

const mapDispatchToProps = dispatch => ({
	updateGame: (delta) => dispatch(updateTimer(delta))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TimeShell);