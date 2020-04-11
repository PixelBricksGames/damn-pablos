import React from "react";
import PropTypes from "prop-types";

import "./MenuTab.scss";

const assetsPath = './../../../../assets/images/';

const MenuTab = ({ name, selected, notification, onClick }) => (
	<button className="menu-tab"
			style={{ backgroundImage: selected ? `url(${assetsPath}ui/tab-${name}-active.png)` : `url(${assetsPath}ui/tab-${name}-inactive.png)` }}
			onClick={ onClick }>
			<div className={`notifications ${notification ? 'on' : 'off'}`}></div>
	</button>
);

export default MenuTab;