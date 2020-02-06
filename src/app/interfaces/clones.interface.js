import PropTypes from "prop-types";

export const IClones = {
	active: PropTypes.bool,
		unlock: PropTypes.number,
		amount: PropTypes.number,
		cost: {
			clones: PropTypes.number,
			money: PropTypes.number,
			agingSerum: PropTypes.number,
			angerSerum: PropTypes.number,
			lustSerum: PropTypes.number,
		},
		revenue: {
			money: PropTypes.number,
			agingSerum: PropTypes.number,
			angerSerum: PropTypes.number,
			lustSerum: PropTypes.number,
		},
		increment: {
			cost: PropTypes.number,
			clonesPerSecond: PropTypes.number
		},
		risk: {
			rebellion: PropTypes.number,
			mutation: PropTypes.number
		}
};