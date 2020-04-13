import { connect } from "react-redux";
import Assistant from "./Assistant";

const mapStateToProps = state => ({
	time: state.get("time"),
	game: state.get("game"),
	config: state.get("config"),
	animations: state.get("animations"),
});

export default connect(
	mapStateToProps
)(Assistant);