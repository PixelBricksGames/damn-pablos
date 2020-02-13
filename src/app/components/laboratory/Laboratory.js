import React from "react";
import PropTypes from "prop-types";

import * as GameState from "./../../store/state/game.init";

import "./Laboratory.scss";
import Capsule from "./capsule/Capsule";
import { CLONES } from "../../units/constants";

const Laboratory = ({ game, config, onClickClone }) => (
	<div className="laboratory">
		<Capsule
			language={ config.language }
			id={ CLONES.FETUS }
			clonesPerClick={ game.clonesPerClick }
			serumPerClick={ game.clonesPerClick }
			sellPerClick={ game.clonesPerClick }
			onClickClone= { () => { onClickClone(game.clonesPerClick) } }
			onClickSell= { () => { onClickClone(game.clonesPerClick) } }
			onClickSerum= { () => { onClickClone(game.clonesPerClick) } }
		></Capsule>
	</div>
);

export default Laboratory;