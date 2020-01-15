import { connect } from "react-redux";
import Counter from "../components/counter/Counter";

const mapStateToProps = state => state.get("game");

export default connect(
	mapStateToProps
)(Counter);