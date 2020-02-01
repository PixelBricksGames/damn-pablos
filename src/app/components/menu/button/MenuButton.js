import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = ({ id, title, units, price, onClick }) => {
    return (
        <button
            className={`btn-${id}`}
            onClick={ onClick }
        >
			<div className={`btn-${id}__title`}>
				{ title }: { units }
			</div>
            <div className={`btn-${id}__price`}>
				{ price }
			</div>
        </button>
    );
}

export default MenuButton;