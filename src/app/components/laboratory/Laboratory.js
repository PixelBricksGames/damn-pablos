import React from "react";
import PropTypes from "prop-types";

import "./Laboratory.scss";
import Capsule from "./capsule/Capsule";
import { CLONES } from "../../units/constants";

const cloneSelected = CLONES.FETUS;
const Laboratory = ({ game, clones, config, onClickClone }) => (
	<div className="laboratory">
		<Capsule
			language={ config.language }
			clone={ clones[cloneSelected] }
			onClickClone= { () => {
				onClickClone(clones[cloneSelected].income)
			} }
		/>
	</div>
);

export default Laboratory;