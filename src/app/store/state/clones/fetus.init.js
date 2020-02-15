export const fetus = {
	id: "fetus",
	amount: 0,
	unlocked: {
		clone: true,
		sell: false,
		serum: false,
	},
	perClick: {
		clones: 1,
		money: 1,
		serum: 1,
	},
	perSecond: {
		clones: 0,
		money: 0,
		serum: 0,
	},
	cost: {
		clones: 0,
		money: 0,
		agingSerum: 0,
		angerSerum: 0,
		chaosSerum: 0,
	},
	income: {
		money: 10,
		agingSerum: 0.1,
		angerSerum: 0,
		chaosSerum: 0,
	},
	increment: {
		cost: 0,
		clonesPerSecond: 0
	},
	risk: {
		rebellion: 0,
		mutation: 0
	}
};