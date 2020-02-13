import { connect } from "react-redux";
import Laboratory from "./Laboratory";

import { createFetusClone } from "./../../store/actions/clones/fetus.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	config: state.get("config")
});

const mapDispatchToProps = dispatch => ({
	onClickClone: (clonesPerClick) => dispatch(createFetusClone(clonesPerClick))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);