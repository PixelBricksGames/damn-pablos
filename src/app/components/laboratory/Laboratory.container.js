import { connect } from "react-redux";
import Laboratory from "./Laboratory";

import { createFetusClone } from "./../../store/actions/clones/fetus.action";

const mapStateToProps = state => state.get("game");

const mapDispatchToProps = dispatch => ({
	onClickClone: (clonesPerClick) => dispatch(createFetusClone(clonesPerClick))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);