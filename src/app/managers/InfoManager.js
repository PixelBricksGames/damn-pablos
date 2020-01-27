import { connect } from "react-redux";
import Info from "./../components/info/Info";

const mapStateToProps = state => state.get("game");

export default connect(
	mapStateToProps
)(Info);