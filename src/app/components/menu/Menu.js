import React from "react";
import PropTypes from "prop-types";

import { IAgedClone } from "../../interfaces/aged-clones.interface";
import { translations } from "./../../units/translations";
import * as CONSTANST from "./../../units/constants";

import "./Menu.scss";

import MenuButton from "./button/MenuButton";

const Menu = ({
		tools,
		agedClones,
		config,
		onClickAutoClone,
		onClickAutoSerum,
		onClickChildClone,
		onClickTeenClone,
		onClickAdultClone,
		onClickSeniorClone,
		onClickAncientClone
	}) => (
	<div className="menu">
		<MenuButton
			id={ CONSTANST.TOOLS.AUTO_CLONE }
			title={ translations[config.language].TOOLS.AUTO_CLONE }
			units={ tools.autoClone.units }
			price={ tools.autoClone.price }
			onClick={() => {
				onClickAutoClone(tools.autoClone.price);
			}}
		/>
		<MenuButton
			id={ CONSTANST.TOOLS.AUTO_SERUM }
			title={ translations[config.language].TOOLS.AUTO_SERUM }
			units={ tools.autoSerum.units }
			price={ tools.autoSerum.price }
			onClick={() => { onClickAutoSerum(tools.autoSerum.price) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.CHILD }
			title={ translations[config.language].AGED_CLONES.CHILD }
			units={ agedClones.child.units }
			price={ agedClones.child.price }
			onClick={() => { onClickChildClone(agedClones.child.price) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.TEEN }
			title={ translations[config.language].AGED_CLONES.TEEN }
			units={ agedClones.teen.units }
			price={ agedClones.teen.price }
			onClick={() => { onClickTeenClone(agedClones.teen.price) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.ADULT }
			title={ translations[config.language].AGED_CLONES.ADULT }
			units={ agedClones.adult.units }
			price={ agedClones.adult.price }
			onClick={() => { onClickAdultClone(agedClones.adult.price) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.SENIOR }
			title={ translations[config.language].AGED_CLONES.SENIOR }
			units={ agedClones.senior.units }
			price={ agedClones.senior.price }
			onClick={() => { onClickSeniorClone(agedClones.senior.price) }}
		/>
		<MenuButton
			id={ CONSTANST.AGED_CLONES.ANCIENT }
			title={ translations[config.language].AGED_CLONES.ANCIENT }
			units={ agedClones.ancient.units }
			price={ agedClones.ancient.price }
			onClick={() => { onClickAncientClone(agedClones.ancient.price) }}
		/>
	</div>
);

Menu.propTypes = {
	// child: PropTypes.shape(IAgedClone).isRequired,
	// teen: PropTypes.shape(IAgedClone).isRequired,
	// adult: PropTypes.shape(IAgedClone).isRequired,
	// senior: PropTypes.shape(IAgedClone).isRequired,
	// ancient: PropTypes.shape(IAgedClone).isRequired,
	onClickAutoClone: PropTypes.func.isRequired,
	onClickAutoSerum: PropTypes.func.isRequired,
	onClickChildClone: PropTypes.func.isRequired,
	onClickTeenClone: PropTypes.func.isRequired,
	onClickAdultClone: PropTypes.func.isRequired,
	onClickSeniorClone: PropTypes.func.isRequired,
	onClickAncientClone: PropTypes.func.isRequired
};

export default Menu;