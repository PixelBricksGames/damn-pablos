import React from "react";

import "./Resource.scss";
import { getTwoDecimals } from "./../../../../utils/utils";
import { getShortAmount } from "./../../../../utils/game";

const assetsPath = './../../../../assets/images/';

const Resource = ({ name, value, total }) => (
	<div className="resource" style={{ backgroundImage: `url(${assetsPath}ui/info-resource-${name}.png)` }}>
		<div className="resource__wrapper">
			{ getBars(name, value, total) }
			<div className="resource__values">
				{ getShortAmount(value) } / { getShortAmount(total) }
			</div>
		</div>
	</div>
);

const getBars = (name, value, total) => {
	let barNumber;
	const array = [];
	if(total >= value) {
		barNumber = parseInt(getTwoDecimals((total - value) * 10 / total), 10);
	} else {
		barNumber = 0;
	}

	for(let i=0; i<barNumber; i++) {
		array.push(i);
	}

	return array.map((index) => (
		<div
			key={index}
			className="resource__bar"
			style={{
				backgroundImage: `url(${assetsPath}ui/info-resource-${name}-bar.png)`,
				left: `${index * 10}px`
			}}>
		</div>
	));
};

export default Resource;