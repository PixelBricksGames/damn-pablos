import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Menu from "./Menu";

import { updateClonesPerSecond } from "../../store/actions/game.action";

import { createAutoClone } from "../../store/actions/tools.action";
import { createAutoSerum } from "../../store/actions/tools.action";

import { createChildClone } from "../../store/actions/aged-clones.action";
import { createTeenClone } from "../../store/actions/aged-clones.action";
import { createAdultClone } from "../../store/actions/aged-clones.action";
import { createSeniorClone } from "../../store/actions/aged-clones.action";
import { createAncientClone } from "../../store/actions/aged-clones.action";

import { payMoney } from "../../store/actions/game.action";
import { deleteClones } from "../../store/actions/game.action";

const mapStateToProps = state => ({
	tools: state.get("tools"),
	agedClones: state.get("agedClones"),
	config: state.get("configuration")
});

const mapDispatchToProps = dispatch => ({
	onClickAutoClone: (autoClone) => dispatch(createAutoClone()),
	// onClickAutoClone: (autoClone) => dispatch(batchActions([
	// 	createAutoClone(),
	// 	updateClonesPerSecond((autoClone.units + 1) * autoClone.perSecond)
	// ])),
	onClickAutoSerum: (price) => dispatch(createAutoSerum()),
	onClickChildClone: (price) => dispatch(batchActions([
		createChildClone(),
		deleteClones(price)
	])),
	onClickTeenClone: (price) => dispatch(batchActions([
		createTeenClone(),
		deleteClones(price)
	])),
	onClickAdultClone: (price) => dispatch(batchActions([
		createAdultClone(),
		deleteClones(price)
	])),
	onClickSeniorClone: (price) => dispatch(batchActions([
		createSeniorClone(),
		deleteClones(price)
	])),
	onClickAncientClone: (price) => dispatch(batchActions([
		createAncientClone(),
		deleteClones(price)
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);