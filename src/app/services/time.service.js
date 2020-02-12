import store from "../store";
import { batchActions } from 'redux-batched-actions';

import * as Utils from "../utils/utils";
import { updateTimeTotal, updateTimeSec, updateTimeDec, clearTimeSec, clearTimeDec } from "../store/actions/time.action";
import { updateClonesPerSecond } from "../store/actions/game.action";

import { unlockAutoClone, unlockAutoSell, unlockAutoSerum } from "../store/actions/tools.action";

import { createFetusClone } from "../store/actions/clones/fetus.action";

// import Roger from "@pabrick/roger";

// const rClock = new Roger.Clock(0.1);
// rClock.setDebugMode(true);
// rClock.start();

// setTimeout(()=>{
// 	rClock.pause();
// }, 1000);

// setTimeout(()=>{
// 	rClock.play();
// }, 1500);

// setTimeout(()=>{
// 	rClock.stop();
// }, 2000);

const timeService = {
	clearTimeInterval: null,
	start: () => {
		timeService.clearTimeInterval = setInterval(() => {

			const state = store.getState();

			const game = state.get("game");
			const tools = state.get("tools");
			const clones = state.get("clones");
			const time = state.get("time");

			const autoClonesIncrement = Utils.fixMultiplier(tools.autoClone.amount, tools.autoClone.increment.perSecond);

			// TODO const childClonesIncrement = 0;

			const totalClonesPerSecond = autoClonesIncrement; // TODO + childClonesIncrement;
			const clonesToAddPerSecond = parseInt(totalClonesPerSecond, 10);
			const restClonesToAdd = Utils.fixSubstraction(totalClonesPerSecond, clonesToAddPerSecond);

			if(time.dec >= 1) {
				store.dispatch(batchActions([
					clearTimeDec(),
					createFetusClone(clonesToAddPerSecond)
				]));
			}

			if(time.sec >= (1 / restClonesToAdd)) {
				store.dispatch(batchActions([
					clearTimeSec(),
					createFetusClone(1),
				]));
			}

			store.dispatch(batchActions([
				updateTimeTotal(),
				updateTimeSec(),
				updateTimeDec(),
				updateClonesPerSecond(totalClonesPerSecond)
			]));

			if(!tools.autoClone.unlocked
			&& (game.currency.money >= parseInt((tools.autoClone.cost.money / 2), 10))) {
				unlockAutoClone();
			}

		}, 100);
	}
};

timeService.start();

export default timeService;