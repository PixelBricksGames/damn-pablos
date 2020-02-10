import PropTypes from "prop-types";

export const IClones = {
	unlocked: PropTypes.bool,
	amount: PropTypes.number,
	cost: {
		clones: PropTypes.number,
		money: PropTypes.number,
		agingSerum: PropTypes.number,
		angerSerum: PropTypes.number,
		chaosSerum: PropTypes.number,
	},
	revenue: {
		money: PropTypes.number,
		agingSerum: PropTypes.number,
		angerSerum: PropTypes.number,
		chaosSerum: PropTypes.number,
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