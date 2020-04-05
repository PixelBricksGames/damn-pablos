import React from "react";
import PropTypes from "prop-types";

import "./Laboratory.scss";
import Capsule from "./capsule/Capsule";

const Laboratory = ({ game, clones, config, onClickClone, onClickSell, onClickSerum }) => (
	<div className="laboratory">
		<Capsule
			language={ config.language }
			clone={ clones.fetus }
			currency={ game.currency }
			onClickClone= { () => { onClickClone(game.clones.perClick) } }
			onClickSell= { () => { onClickSell(1, clones.fetus.income.money) } }
			onClickSerum= { () => { onClickSerum(1, clones.fetus.income.serum) } }
		/>
	</div>
);

export default Laboratory;