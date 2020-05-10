import React from "react";
import PropTypes from "prop-types";

import { RESOURCES } from "./../../../../../units/constants";
import { getShortAmount } from "./../../../../../utils/game";

import "./MenuButton.scss";

const getCostResource = (cost, unlocked, name) => {
	if(cost[name]) {
		return (
			<div className={ name }>
				{unlocked ? cost[name] : '???'}
			</div>
		);
	}
};

const MenuButton = ({ id, title, amount, cost, enabled, unlocked, onClick }) => {
    return (
        <button
            className={`menu-btn ${unlocked ? (enabled ? 'enabled' : 'disabled') : 'locked'}`}
            onClick={ enabled ? onClick : undefined }
        >
			<div className={`icon-${id.toLowerCase()}`}></div>
			<div className="content">
				<div className="content__top">
					<div className="title">{ unlocked ? title : '???' }</div>
					<div className="amount">{ unlocked ? getShortAmount(amount) : ''  }</div>
				</div>
				<div className="content__bottom">
					<div className="cost">
						{ getCostResource(cost, unlocked, RESOURCES.ROOM) }
						{ getCostResource(cost, unlocked, RESOURCES.ENERGY) }
						{ getCostResource(cost, unlocked, RESOURCES.MONEY) }
						{/* { getCostResource(cost, unlocked, RESOURCES.CLONES) }
						{ getCostResource(cost, unlocked, RESOURCES.AGING_SERUM) }
						{ getCostResource(cost, unlocked, RESOURCES.ANGER_SERUM) }
						{ getCostResource(cost, unlocked, RESOURCES.CHAOS_SERUM) } */}
					</div>
				</div>
			</div>
        </button>
    );
}

export default MenuButton;