import { connect } from "react-redux";
import Clicker from "../components/clicker/Clicker";
import { increaseCounter } from "../store/actions/game.action";

const mapStateToProps = state => state.get("game");

const mapDispatchToProps = dispatch => ({
	onClicker: (counter) => dispatch(increaseCounter(counter))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Clicker);