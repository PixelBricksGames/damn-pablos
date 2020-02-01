export const game = {
	info: {
		language: 'eng',
		clones: 0,
		clonesPerSecond: 0,
		clonesPerClick: 1,
		clonesInTotal: 0,
		agingSerum: 0,
	},
	tools: {
		cronjob: {
			active: false,
			unlock: 10,
			price: 25,
			units: 0
		},
	},
	agedClones: {
		child: {
			active: false,
			unlock: 50,
			price: 100,
			units: 0
		},
		teen: {
			active: false,
			unlock: 150,
			price: 200,
			units: 0
		},
		senior: {
			active: false,
			unlock: 250,
			price: 300,
			units: 0
		},
		adult: {
			active: false,
			unlock: 350,
			price: 400,
			units: 0
		},
		ancient: {
			active: false,
			unlock: 550,
			price: 500,
			units: 0
		}
	},
	specialClones: {
		mutant: {
			active: false,
			unlock: 1000,
			price: 2000,
			units: 0
		},
		monster: {
			active: false,
			unlock: 5000,
			price: 10000,
			units: 0
		},
		pure: {
			active: false,
			unlock: 50000,
			price: 1000000,
			units: 0
		}
	},
};
