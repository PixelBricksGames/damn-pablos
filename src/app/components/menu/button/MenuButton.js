import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = ({ id, title, amount, cost, unlocked, enabled, onClick }) => {
    return (
        <button
            className={`menu-btn btn-${id}`}
            onClick={ onClickButton(enabled, onClick) }
        >
			<div className={`title btn-${id}__title`}>
				{ title }: { amount }
			</div>
            <div className={`cost btn-${id}__cost`}>
				{ cost }
			</div>
        </button>
    );
}

const onClickButton = (enabled, callback) => {
	if(enabled) {
		return callback;
	}
}

export default MenuButton;