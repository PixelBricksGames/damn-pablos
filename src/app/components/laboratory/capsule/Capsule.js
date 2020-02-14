import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../../units/translations";

import "./Capsule.scss";
import CapsuleButton from "./button/CapsuleButton";

const Capsule = ({ language, clone, currency, onClickClone, onClickSerum, onClickSell }) => {
    return (
		<div id={clone.id} className="capsule">
			<div className="button__clone">
				<CapsuleButton
					text={ translations[language].GAME.CLONE }
					unlocked={ clone.unlocked.clone }
					enabled={ true }
					onClick={ onClickClone }
				></CapsuleButton>
			</div>

			<div className="button__sell">
				<CapsuleButton
					text={ translations[language].GAME.SELL }
					unlocked={ clone.unlocked.sell }
					enabled={ clone.amount > 0 }
					onClick={ onClickSell }
				></CapsuleButton>
			</div>

			<div className="button__serum">
				<CapsuleButton
					text={ translations[language].GAME.SERUM }
					unlocked={ clone.unlocked.serum }
					enabled={ clone.amount > 0 }
					onClick={ onClickSerum }
				></CapsuleButton>
			</div>
		</div>
    );
}

export default Capsule;