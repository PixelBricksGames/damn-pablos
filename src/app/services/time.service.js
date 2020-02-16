import store from "../store";
import { batchActions } from 'redux-batched-actions';

import packageJson from './../../../package.json';

import * as Utils from "../utils/utils";
import { TIME } from "../units/constants";
import { translations } from "../units/translations";

import { updateTimeTotal, updateTimeSec, updateTimeDec, clearTimeSec, clearTimeDec } from "../store/actions/time.action";
import { updateClonesPerSecond, updateCurrencyClones } from "../store/actions/game.action";
import { addTime } from "../store/actions/stats.action";
import { unlockAutoClone, unlockAutoSell, unlockAutoSerum } from "../store/actions/tools.action";
import { unlockCloneFetus, unlockSellFetus, unlockSerumFetus, createFetusClone, killFetusClone } from "../store/actions/clones/fetus.action";

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
			const config = state.get("config");
			const time = state.get("time");
			const tools = state.get("tools");
			const clones = {
				fetus: state.get("clones").get("fetus")
			};

			const autoClonesIncrement = Utils.fixMultiplier(tools.autoClone.amount, tools.autoClone.increment.perSecond);

			// TODO const childClonesIncrement = 0;

			const totalClonesPerSecond = autoClonesIncrement; // TODO + childClonesIncrement;
			const clonesToAddPerSecond = parseInt(totalClonesPerSecond, 10);
			const restClonesToAdd = Utils.fixSubstraction(totalClonesPerSecond, clonesToAddPerSecond);

			const dispatchedActions = [];

			if(time.dec >= 1) {
				dispatchedActions.push(clearTimeDec());
				dispatchedActions.push(createFetusClone(clonesToAddPerSecond));
			}

			if(time.sec >= (1 / restClonesToAdd)) {
				dispatchedActions.push(clearTimeSec());
				dispatchedActions.push(createFetusClone(1));
			}

			dispatchedActions.push(updateTimeTotal());
			dispatchedActions.push(updateTimeSec());
			dispatchedActions.push(updateTimeDec());
			dispatchedActions.push(updateClonesPerSecond(totalClonesPerSecond));

			dispatchedActions.push(addTime(TIME.DELTA));

			if(checkUnlockSellFetus(clones.fetus, game.currency.clones)) {
				dispatchedActions.push(unlockSellFetus());
			}

			if(checkUnlockAutoClone(tools.autoClone, game.currency.money)) {
				dispatchedActions.push(unlockAutoClone());
			}

			const totalClones = clones.fetus.amount; //+ clones.child.amount + clones.teen.amount + clones.adult.amount + clones.senior.amount + clones.ancient.amount;
			dispatchedActions.push(updateCurrencyClones(totalClones));
			document.title = `${totalClones} ${translations[config.language].GAME.CURRENCY.CLONES}`;

			store.dispatch(batchActions(dispatchedActions));

		}, 100);
	}
};

console.log(`start DAMN PABLOS: v.${packageJson.version}`);
timeService.start();

export default timeService;

const checkUnlockSellFetus = (fetus, clones) => {
	return !fetus.unlocked.sell && fetus.amount >= 25;
}

const checkUnlockAutoClone = (autoClone, money) => {
	return !autoClone.unlocked && (money >= parseInt((autoClone.cost / 2), 10))
}