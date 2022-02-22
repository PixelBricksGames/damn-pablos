import React from "react";
import PropTypes from "prop-types";

import { translations } from "../../../units/translations";
import { getTwoDecimals } from "../../../utils/utils";

import "./Info.scss";
import Resource from "./resource/Resource";

const Info = ({
	game,
	ui,
	config,
	clones,
	tools,
	onClickMenu
}) => (
	<section className="info">
		<article className="info__resources">
			<Resource
				className="resource"
				name="energy"
				value={ game.resources.energy.used }
				total={ game.resources.energy.total }
			/>
		</article>
	</section>
);

export default Info;