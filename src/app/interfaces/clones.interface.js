import PropTypes from "prop-types";

export const IClones = {
	id: PropTypes.string,
	amount: PropTypes.number,
	unlocked: {
		clone: PropTypes.bool,
		sell: PropTypes.bool,
		serum: PropTypes.bool
	},
	cost: {
		clones: PropTypes.number,
		money: PropTypes.number,
		agingSerum: PropTypes.number,
		angerSerum: PropTypes.number,
		chaosSerum: PropTypes.number,
	},
	income: {
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