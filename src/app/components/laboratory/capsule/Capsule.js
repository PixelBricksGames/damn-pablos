import React from "react";
import PropTypes from "prop-types";

import "./Capsule.scss";

const Capsule = ({ id, clonesPerClick, serumPerClick, sellPerClick, onClickClone, onClickSerum, onClickSell }) => {
    return (
		<div id={id} className="capsule">
			<button className="button__clone" onClick={() => { onClickClone(clonesPerClick) }}>CLONE!</button>
			<button className="button__sell" onClick={() => { onClickSell(sellPerClick) }}>SELL!</button>
			<button className="button__serum" onClick={() => { onClickSerum(serumPerClick) }}>SERUM!</button>
		</div>
    );
}

export default Capsule;