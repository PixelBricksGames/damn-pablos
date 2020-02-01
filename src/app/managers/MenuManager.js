import { connect } from "react-redux";
import Menu from "./../components/menu/Menu";

import { createCronjob } from "../store/actions/tools.action";

import { createChildClone } from "../store/actions/aged-clones.action";
import { createTeenClone } from "../store/actions/aged-clones.action";
import { createAdultClone } from "../store/actions/aged-clones.action";
import { createSeniorClone } from "../store/actions/aged-clones.action";
import { createAncientClone } from "../store/actions/aged-clones.action";

import { payMoney } from "../store/actions/game.action";
import { deleteClones } from "../store/actions/game.action";

const mapStateToProps = state => ({
	tools: state.get("tools"),
	agedClones: state.get("agedClones"),
	config: state.get("configuration")
});

const mapDispatchToProps = dispatch => ({
	onClickCronjob: () => {
		dispatch(createCronjob());
	},
	onClickChildClone: (price) => {
		dispatch(createChildClone());
		dispatch(deleteClones(price));
	},
	onClickTeenClone: (price) => {
		dispatch(createTeenClone());
		dispatch(deleteClones(price));
	},
	onClickAdultClone: (price) => {
		dispatch(createAdultClone());
		dispatch(deleteClones(price));
	},
	onClickSeniorClone: (price) => {
		dispatch(createSeniorClone());
		dispatch(deleteClones(price));
	},
	onClickAncientClone: (price) => {
		dispatch(createAncientClone());
		dispatch(deleteClones(price));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);