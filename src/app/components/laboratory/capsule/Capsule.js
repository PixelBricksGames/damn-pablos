import React from "react";
import PropTypes from "prop-types";
import { translations } from "./../../../units/translations";

import "./Capsule.scss";
import CapsuleButton from "./button/CapsuleButton";
import CapsuleVat from "./vat/CapsuleVat";

const Capsule = ({ time, animations, language, clone, onClickClone, onClickSerum, onClickSell }) => {
    return (
		<div id={clone.id} className="capsule">

			<section className="buttons">
				<div className={`button-clone ${clone.unlocked.clone ? 'unlocked' : ''}`}>
					<CapsuleButton
						text={ translations[language].GAME.ACTIONS.CLONE }
						unlocked={ clone.unlocked.clone }
						enabled={ true }
						onClick={ onClickClone }
					/>
				</div>

				<div className={`button-sell ${clone.unlocked.sell ? 'unlocked' : ''}`}>
					<CapsuleButton
						text={ translations[language].GAME.ACTIONS.SELL }
						unlocked={ clone.unlocked.sell }
						enabled={ clone.amount > 0 }
						onClick={ onClickSell }
					/>
				</div>

				<div className={`button-serum ${clone.unlocked.serum ? 'unlocked' : ''}`}>
					<CapsuleButton
						text={ translations[language].GAME.ACTIONS.SERUM }
						unlocked={ clone.unlocked.serum }
						enabled={ clone.amount > 0 }
						onClick={ onClickSerum }
					/>
				</div>
			</section>
			<section className="vat">
				<CapsuleVat
					time={ time }
					animations={ animations }
				/>
			</section>
		</div>
    );
}

export default Capsule;