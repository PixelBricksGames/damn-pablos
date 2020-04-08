import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = ({ id, title, amount, cost, enabled, onClick }) => {
    return (
        <button
            className={`menu-btn ${enabled ? 'enabled' : 'disabled'}`}
            onClick={ enabled ? onClick : undefined }
        >
			<div className={`icon-${id.toLowerCase()}`}></div>
			<div className="content">
				<div className="content__top">
					<div className="title">{ title }</div>
					<div className="amount">{ amount }</div>
				</div>
				<div className="content__bottom">
					<div className="cost money">{ cost }</div>
					{/* <div className="info"></div> */}
				</div>
			</div>
        </button>
    );
}

export default MenuButton;