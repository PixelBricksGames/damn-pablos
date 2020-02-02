import { connect } from "react-redux";
import Laboratory from "./Laboratory";

import { createClones } from "../../store/actions/game.action";

const mapStateToProps = state => state.get("game");

const mapDispatchToProps = dispatch => ({
	onClickClone: (clones, clonesPerClick) => dispatch(createClones(clones, clonesPerClick))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);