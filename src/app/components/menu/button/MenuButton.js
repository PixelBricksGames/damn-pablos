import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = ({ title, amount, cost, enabled, onClick }) => {
    return (
        <button
            className={ `menu-btn ${enabled ? 'enabled' : 'locdisabledked'}  ${enabled ? 'enabled' : 'disabled'}` }
            onClick={ enabled ? onClick : undefined }
        >
			<div className={`title`}>
				{ title }: { amount }
			</div>
            <div className={`cost`}>
				{ cost }
			</div>
        </button>
    );
}

export default MenuButton;