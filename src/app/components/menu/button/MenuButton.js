import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = ({ id, title, amount, cost, unlocked, enabled, onClick }) => {
    return (
        <button
            className={ `btn-${id} menu-btn ${unlocked ? 'unlocked' : 'locked'}  ${enabled ? 'enabled' : 'disabled'}` }
            onClick={ (enabled && unlocked) ? onClick : undefined }
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

export default MenuButton;