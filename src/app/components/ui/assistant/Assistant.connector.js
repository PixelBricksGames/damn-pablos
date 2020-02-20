import { connect } from "react-redux";
import Assistant from "./Assistant";

const mapStateToProps = state => ({
	game: state.get("game"),
	config: state.get("config")
});

export default connect(
	mapStateToProps
)(Assistant);