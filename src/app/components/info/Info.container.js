import { connect } from "react-redux";
import Info from "./Info";

const mapStateToProps = state => ({
	game: state.get("game"),
	tools: state.get("tools"),
	agedClones: state.get("agedClones"),
	config: state.get("configuration")
});

export default connect(
	mapStateToProps
)(Info);