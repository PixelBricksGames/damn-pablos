import React from "react";
import PropTypes from "prop-types";

import { CURRENCIES } from "./../../../../../units/constants";
import "./MenuButton.scss";

const getCostCurrency = (cost, unlocked, name) => {
	if(cost[name]) {
		return (<div className={ name }>{unlocked ? cost[name] : '???'}</div>);
	}
};

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
						{ getCostCurrency(cost, unlocked, CURRENCIES.CLONES) }
						{ getCostCurrency(cost, unlocked, CURRENCIES.MONEY) }
						{ getCostCurrency(cost, unlocked, CURRENCIES.AGING_SERUM) }
						{ getCostCurrency(cost, unlocked, CURRENCIES.ANGER_SERUM) }
						{ getCostCurrency(cost, unlocked, CURRENCIES.CHAOS_SERUM) }
					</div>
					{/* <div className="info"></div> */}
				</div>
			</div>
        </button>
    );
}

export default MenuButton;