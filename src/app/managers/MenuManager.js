import { connect } from "react-redux";
import Menu from "./../components/menu/Menu";

import { createAgedClone } from "./../store/actions/createAgedClone.action";

const mapStateToProps = state => state.get("game");

const mapDispatchToProps = dispatch => ({
	onClickAgedClone: (agedCloneName) => dispatch(createAgedClone(agedCloneName))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);