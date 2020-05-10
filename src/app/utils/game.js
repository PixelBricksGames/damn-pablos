import { getTwoDecimals } from "./utils";

export const getShortAmount = (amount) => {
	if(amount >= 1000000000) {
		return `${Math.floor(amount / 1000000000)}T`;
	} else if(amount >= 1000000) {
		return `${Math.floor(amount / 1000000)}M`;
	} else if(amount >= 1000) {
		return `${Math.floor(amount / 1000)}K`;
	} else {
		return `${amount}`;
	}
};

export const getRoomUsed = (clones) => {
	let roomUsed = 0;
	Object.keys(clones).forEach((key, index) => {
		roomUsed = roomUsed + clones[key].amount * clones[key].cost.room;
	});
	return getTwoDecimals(roomUsed);
}

export const getEnergyUsed = (tools) => {
	let energyUsed = 0;
	// Object.keys(clones).forEach((key, index) => {
	// 	energyUsed = energyUsed + tools[key].amount * tools[key].cost.energy;
	// });
	return getTwoDecimals(energyUsed);
}