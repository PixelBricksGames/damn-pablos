import React from "react";
import PropTypes from "prop-types";

import "./Laboratory.scss";
import Capsule from "./capsule/Capsule";
import { CLONES } from "../../units/constants";

const cloneSelected = CLONES.FETUS;
const Laboratory = ({ time, animations, game, clones, config, onClickClone }) => (
	<div className="laboratory">
		<Capsule
			time={ time }
			animations={ animations }
			language={ config.language }
			clone={ clones[cloneSelected] }
			onClickClone= { () => {
				onClickClone(clones[cloneSelected].income)
			} }
		/>
	</div>
);

export default Laboratory;