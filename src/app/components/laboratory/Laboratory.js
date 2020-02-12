import React from "react";
import PropTypes from "prop-types";

import * as GameState from "./../../store/state/game.init";

import "./Laboratory.scss";
import Capsule from "./capsule/Capsule";
import { CLONES } from "../../units/constants";

const Laboratory = ({ clonesPerClick, onClickClone }) => (
	<div className="laboratory">
		<Capsule
			id={ CLONES.FETUS }
			clonesPerClick={ clonesPerClick }
			serumPerClick={ clonesPerClick }
			sellPerClick={ clonesPerClick }
			onClickClone= { () => { onClickClone(clonesPerClick) } }
			onClickSell= { () => { onClickClone(clonesPerClick) } }
			onClickSerum= { () => { onClickClone(clonesPerClick) } }
		></Capsule>
	</div>
);

Laboratory.propTypes = {
	clonesPerClick: PropTypes.number.isRequired,
	onClickClone: PropTypes.func.isRequired
};

export default Laboratory;