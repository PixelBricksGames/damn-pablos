import { connect } from "react-redux";
import Currencies from "./Currencies";

const mapStateToProps = state => ({
	game: state.get("game"),
	config: state.get("config")
});

export default connect(
	mapStateToProps
)(Currencies);