import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Menu from "./Menu";

import { updateClonesPerSecond } from "../../store/actions/game.action";

import { payMoney } from "../../store/actions/game.action";
import { deleteClones } from "../../store/actions/game.action";

import { createAutoClone } from "../../store/actions/tools.action";
import { createAutoSerum } from "../../store/actions/tools.action";

import { killFetusClone } from "../../store/actions/clones/fetus.action";

// import { createChildClone } from "../../store/actions/aged-clones.action";
// import { createTeenClone } from "../../store/actions/aged-clones.action";
// import { createAdultClone } from "../../store/actions/aged-clones.action";
// import { createSeniorClone } from "../../store/actions/aged-clones.action";
// import { createAncientClone } from "../../store/actions/aged-clones.action";

const mapStateToProps = state => ({
	tools: state.get("tools"),
	clones: state.get("clones"),
	config: state.get("configuration")
});

const mapDispatchToProps = dispatch => ({
	onClickAutoClone: (autoClone) => dispatch(batchActions([
		createAutoClone(),
		killFetusClone(autoClone.cost.clones)
		// updateClonesPerSecond((autoClone.amount + 1) * autoClone.perSecond)
	])),
	// onClickAutoSerum: (cost) => dispatch(createAutoSerum()),
	// onClickChildClone: (cost) => dispatch(batchActions([
	// 	createChildClone(),
	// 	deleteClones(cost)
	// ])),
	// onClickTeenClone: (cost) => dispatch(batchActions([
	// 	createTeenClone(),
	// 	deleteClones(cost)
	// ])),
	// onClickAdultClone: (cost) => dispatch(batchActions([
	// 	createAdultClone(),
	// 	deleteClones(cost)
	// ])),
	// onClickSeniorClone: (cost) => dispatch(batchActions([
	// 	createSeniorClone(),
	// 	deleteClones(cost)
	// ])),
	// onClickAncientClone: (cost) => dispatch(batchActions([
	// 	createAncientClone(),
	// 	deleteClones(cost)
	// ]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);