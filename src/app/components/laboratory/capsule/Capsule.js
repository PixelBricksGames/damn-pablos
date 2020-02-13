import React from "react";
import PropTypes from "prop-types";

import { translations } from "./../../../units/translations";

import "./Capsule.scss";
import CapsuleButton from "./button/CapsuleButton";

const Capsule = ({ language, id, clonesPerClick, serumPerClick, sellPerClick, onClickClone, onClickSerum, onClickSell }) => {
    return (
		<div id={id} className="capsule">
			<div className="button__clone">
				<CapsuleButton
					text={ translations[language].GAME.CLONE }
					unlocked={ true }
					enabled={ true }
					onClick={() => { onClickClone(clonesPerClick) }}
				></CapsuleButton>
			</div>

			<div className="button__sell">
				<CapsuleButton
					text={ translations[language].GAME.SELL }
					unlocked={ true }
					enabled={ true }
					onClick={() => { onClickSell(sellPerClick) }}
				></CapsuleButton>
			</div>

			<div className="button__serum">
				<CapsuleButton
					text={ translations[language].GAME.SERUM }
					unlocked={ true }
					enabled={ true }
					onClick={() => { onClickSerum(serumPerClick) }}
				></CapsuleButton>
			</div>
		</div>
    );
}

export default Capsule;