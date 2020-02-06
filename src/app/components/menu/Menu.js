import React from "react";
import PropTypes from "prop-types";

import { IClones } from "../../interfaces/clones.interface";
import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Menu.scss";

import MenuButton from "./button/MenuButton";

const Menu = ({
		tools,
		clones,
		config,
		onClickAutoClone
		// onClickAutoSerum,
		// onClickChildClone,
		// onClickTeenClone,
		// onClickAdultClone,
		// onClickSeniorClone,
		// onClickAncientClone
	}) => (
	<div className="menu">
		<MenuButton
			id={ CONSTANST.TOOLS.AUTO_CLONE }
			title={ translations[config.language].TOOLS.AUTO_CLONE }
			amount={ tools.autoClone.amount }
			cost={ tools.autoClone.cost }
			onClick={() => {
				onClickAutoClone();
			}}
		/>
		{/* <MenuButton
			id={ CONSTANST.TOOLS.AUTO_SERUM }
			title={ translations[config.language].TOOLS.AUTO_SERUM }
			amount={ tools.autoSerum.amount }
			cost={ tools.autoSerum.cost }
			onClick={() => { onClickAutoSerum(tools.autoSerum.cost) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.CHILD }
			title={ translations[config.language].AGED_CLONES.CHILD }
			amount={ agedClones.child.amount }
			cost={ agedClones.child.cost }
			onClick={() => { onClickChildClone(agedClones.child.cost) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.TEEN }
			title={ translations[config.language].AGED_CLONES.TEEN }
			amount={ agedClones.teen.amount }
			cost={ agedClones.teen.cost }
			onClick={() => { onClickTeenClone(agedClones.teen.cost) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.ADULT }
			title={ translations[config.language].AGED_CLONES.ADULT }
			amount={ agedClones.adult.amount }
			cost={ agedClones.adult.cost }
			onClick={() => { onClickAdultClone(agedClones.adult.cost) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.SENIOR }
			title={ translations[config.language].AGED_CLONES.SENIOR }
			amount={ agedClones.senior.amount }
			cost={ agedClones.senior.cost }
			onClick={() => { onClickSeniorClone(agedClones.senior.cost) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.ANCIENT }
			title={ translations[config.language].AGED_CLONES.ANCIENT }
			amount={ agedClones.ancient.amount }
			cost={ agedClones.ancient.cost }
			onClick={() => { onClickAncientClone(agedClones.ancient.cost) }}
		/> */}
	</div>
);

Menu.propTypes = {
	// fetus: PropTypes.shape(IClones).isRequired,
	// child: PropTypes.shape(IClones).isRequired,
	// teen: PropTypes.shape(IClones).isRequired,
	// adult: PropTypes.shape(IClones).isRequired,
	// senior: PropTypes.shape(IClones).isRequired,
	// ancient: PropTypes.shape(IClones).isRequired,
	onClickAutoClone: PropTypes.func.isRequired,
	// onClickAutoSerum: PropTypes.func.isRequired,
	// onClickChildClone: PropTypes.func.isRequired,
	// onClickTeenClone: PropTypes.func.isRequired,
	// onClickAdultClone: PropTypes.func.isRequired,
	// onClickSeniorClone: PropTypes.func.isRequired,
	// onClickAncientClone: PropTypes.func.isRequired
};

export default Menu;