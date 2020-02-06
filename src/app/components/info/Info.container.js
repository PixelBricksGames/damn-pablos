import { connect } from "react-redux";
import Info from "./Info";

const mapStateToProps = state => ({
	game: state.get("game"),
	tools: state.get("tools"),
	clones: {
		fetus: state.get("clones").get("fetus")
	},
	config: state.get("configuration")
});

export default connect(
	mapStateToProps
)(Info);