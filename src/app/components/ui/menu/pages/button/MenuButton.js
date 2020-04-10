import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const getCosts = (cost, unlocked) => {
	return (
		<div className="money">{unlocked ? cost : '???'}</div>
	);
}

const MenuButton = ({ id, title, amount, cost, unlocked, enabled, onClick }) => {
    return (
        <button
            className={`menu-btn ${unlocked ? (enabled ? 'enabled' : 'disabled') : 'locked'}`}
            onClick={ enabled ? onClick : undefined }
        >
			<div className={`icon-${id.toLowerCase()}`}></div>
			<div className="content">
				<div className="content__top">
					<div className="title">{ unlocked ? title : '???' }</div>
					<div className="amount">{ unlocked ? amount : ''  }</div>
				</div>
				<div className="content__bottom">
					<div className="cost">
						{ getCosts(cost, unlocked) }
					</div>
					{/* <div className="info"></div> */}
				</div>
			</div>
        </button>
    );
}

export default MenuButton;