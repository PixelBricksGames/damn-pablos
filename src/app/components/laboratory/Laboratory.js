import React from "react";
import PropTypes from "prop-types";

import * as GameState from "./../../store/state/game.init";

import "./Laboratory.scss";
import Capsule from "./capsule/Capsule";
import { CLONES } from "../../units/constants";

const Laboratory = ({ game, clones, config, onClickClone, onClickSell, onClickSerum }) => (
	<div className="laboratory">
		<Capsule
			language={ config.language }
			id={ CLONES.FETUS }
			clonesPerClick={ game.clones.perClick }
			serumPerClick={ game.clones.perClick }
			sellPerClick={ game.clones.perClick }
			onClickClone= { () => { onClickClone(game.clones.perClick) } }
			onClickSell= { () => { onClickSell(1, clones.fetus.income.money) } }
			onClickSerum= { () => { onClickSerum(1, clones.fetus.income.serum) } }
		></Capsule>
	</div>
);

export default Laboratory;