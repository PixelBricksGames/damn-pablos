import { connect } from "react-redux";
import Laboratory from "./../components/laboratory/Laboratory";

import { createClones } from "./../store/actions/game.action";

import { createChildClone } from "../store/actions/aged-clones.action";

const mapStateToProps = state => state.get("game");

const mapDispatchToProps = dispatch => ({
	onClickClone: (clones, clonesPerClick) => dispatch(createClones(clones, clonesPerClick))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Laboratory);