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
		onClickCronjob,
		onClickChildClone,
		onClickTeenClone,
		onClickAdultClone,
		onClickSeniorClone,
		onClickAncientClone
	}) => (
	<div className="menu">
		<MenuButton
			id={ CONSTANST.TOOLS.CRONJOB }
			title={ translations[config.language].TOOLS.CRONJOB }
			units={ tools.cronjob.units }
			price={ tools.cronjob.price }
			onClick={() => { onClickCronjob(agedClones.child.price) }}
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
	onClickCronjob: PropTypes.func.isRequired,
	onClickChildClone: PropTypes.func.isRequired,
	onClickTeenClone: PropTypes.func.isRequired,
	onClickAdultClone: PropTypes.func.isRequired,
	onClickSeniorClone: PropTypes.func.isRequired,
	onClickAncientClone: PropTypes.func.isRequired
};

export default Menu;