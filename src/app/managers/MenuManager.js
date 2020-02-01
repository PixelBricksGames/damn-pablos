import { connect } from "react-redux";
import Menu from "./../components/menu/Menu";

import { createChildClone } from "../store/actions/aged-clones.action";
import { createTeenClone } from "../store/actions/aged-clones.action";
import { createAdultClone } from "../store/actions/aged-clones.action";
import { createSeniorClone } from "../store/actions/aged-clones.action";
import { createAncientClone } from "../store/actions/aged-clones.action";

import { deleteClones } from "../store/actions/game.action";

const mapStateToProps = state => state.get("game");

const mapDispatchToProps = dispatch => ({
	onClickChildClone: () => {
		dispatch(createChildClone());
		dispatch(deleteClones(1));
	},
	onClickTeenClone: () => dispatch(createTeenClone()),
	onClickAdultClone: () => dispatch(createAdultClone()),
	onClickSeniorClone: () => dispatch(createSeniorClone()),
	onClickAncientClone: () => dispatch(createAncientClone()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);