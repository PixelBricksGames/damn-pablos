import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = ({ id, title, amount, cost, onClick }) => {
    return (
        <button
            className={`btn-${id}`}
            onClick={ onClick }
        >
			<div className={`btn-${id}__title`}>
				{ title }: { amount }
			</div>
            <div className={`btn-${id}__cost`}>
				{ cost }
			</div>
        </button>
    );
}

export default MenuButton;