export const game = {
	clonesPerSecond: 0,
	clonesPerClick: 1,
	outbreak: false,
	currency: {
		clones: 0,
		money: 0,
		agingSerum: 0,
		angerSerum: 0,
		chaosSerum: 0,
	},
	risk: {
		rebellion: 0,
		mutation: 0
	},
	unlock: {
		tools: {
			autoClone: false,
			autoSell: false,
			autoSerum: false,
		},
		clones: {
			child: {
				clone: false,
				sell: false,
				serum: false
			},
			teen: {
				clone: false,
				sell: false,
				serum: false
			},
			adult: {
				clone: false,
				sell: false,
				serum: false
			},
			senior: {
				clone: false,
				sell: false,
				serum: false
			},
			ancient: {
				clone: false,
				sell: false,
				serum: false
			}
		}
	}
};