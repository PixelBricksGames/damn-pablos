import { connect } from "react-redux";
import Laboratory from "./../components/laboratory/Laboratory";

import { createClone } from "./../store/actions/createClone.action";

const mapStateToProps = state => state.get("game");

const mapDispatchToProps = dispatch => ({
	onClickClone: (clones, clonesPerClick) => dispatch(createClone(clones, clonesPerClick))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);