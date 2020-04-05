import React from "react";
import PropTypes from "prop-types";

import "./MenuTab.scss";

const assetsPath = './../../../../assets/images/';

const MenuTab = ({ name, isSelected, onClick }) => (
	<button className="menu-tab"
			style={{ backgroundImage: isSelected ? `url(${assetsPath}ui/tab-${name}-active.png)` : `url(${assetsPath}ui/tab-${name}-inactive.png)` }}
			onClick={ onClick }>
	</button>
);

export default MenuTab;