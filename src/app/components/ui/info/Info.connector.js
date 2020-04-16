import { connect } from "react-redux";
import { batchActions } from 'redux-batched-actions';

import Info from "./Info";
import { toggleMenu } from "../../../store/ui/ui.action";

const mapStateToProps = state => ({
	game: state.get("game"),
	tools: state.get("tools"),
	clones: {
		fetus: state.get("clones").get("fetus")
		// TODO
	},
	config: state.get("config"),
	ui: state.get("ui")
});

const mapDispatchToProps = dispatch => ({
	onClickMenu: () => dispatch(batchActions([
		toggleMenu()
	]))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Info);