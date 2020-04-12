import store from "../store";
import { batchActions } from 'redux-batched-actions';

import packageJson from './../../../package.json';

import * as Utils from "../utils/utils";
import { GAME, TIME } from "../units/constants";
import { translations } from "../units/translations";

import { updateTimeTotal, updateTimeSec, updateTimeDec, clearTimeSec, clearTimeDec } from "../store/time/time.action";
import { updateClonesPerSecond, updateCurrencyClones } from "../store/game/game.action";
import { setMenuNotifications, clearMenuNotifications, setToolsTabNotifications } from "../store/ui/ui.action";
import { addTime } from "../store/stats/stats.action";
import { unlockCloneFetus, unlockSellFetus, unlockSerumFetus, createFetusClone, killFetusClone } from "../store/clones/fetus/fetus.action";
import { unlockAutoClone, unlockAutoSell, unlockAutoSerum } from "../store/tools/tools.action";

// import Roger from "@pabrick/roger";
// console.log("pablo", document.getElementById("pablo"));
// const ssPablosHeads = new Roger.RegularSheet("./../../assets/images/common/spritesheet.png", {w:512,h:512}, {w:54,h:90});
// const pabloIdleSprite = new Roger.Sprite("./../../assets/images/common/spritesheet.png", {w:54,h:90}, {x:0,y:0});
// const animPablos_blink1 = new Roger.Animation("blink1",
//                                                 ssPablosHeads,
//                                                 [0,1,2,1,0],
//                                                 { delay: 0, loops: -1, callBack: ()=> {
//                                                         console.log("blink complete!");
//                                                     }
// 												});

// const pabloToon = new Roger.Toon("pablo", pabloIdleSprite);
// pabloToon.addAnimation(animPablos_blink1);
// pabloToon.playAnimation("blink1");

// const rClock = new Roger.Clock(0.1);
// rClock.addToonToUpdate(pabloToon);
// rClock.setDebugMode(true);
// rClock.start();

const timeService = {
	clearTimeInterval: null,
	start: () => {
		timeService.clearTimeInterval = setInterval(() => {

			const state = store.getState();

			const game = state.get("game");
			const config = state.get("config");
			const time = state.get("time");
			const tools = state.get("tools");
			const ui = state.get("ui");
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
				dispatchedActions.push(setToolsTabNotifications());
			}

			if(checkMenuNotifications(ui)) {
				dispatchedActions.push(setMenuNotifications());
			} else {
				dispatchedActions.push(clearMenuNotifications());
			}
			// console.log("time.service - pabloToon", window.pabloToon);

			const totalClones = clones.fetus.amount; //+ clones.child.amount + clones.teen.amount + clones.adult.amount + clones.senior.amount + clones.ancient.amount;
			dispatchedActions.push(updateCurrencyClones(totalClones));
			document.title = `${totalClones} ${translations[config.language].GAME.CURRENCY.CLONES}`;

			store.dispatch(batchActions(dispatchedActions));

			if(+time.sec.toString().split('').pop() === 0) {
				saveLocalStorage(JSON.stringify(state));
			}

		}, 100);
	}
};

console.log(`start DAMN PABLOS: v.${packageJson.version}`);
timeService.start();

export default timeService;

const checkMenuNotifications = (ui) => {
	const pagesList = Object.entries(ui.pages);
	const notifications = pagesList.reduce((accumulator, page)=>{
		return (accumulator || page[1].notifications);
	}, false);
	return notifications;
}

const checkUnlockSellFetus = (fetus, clones) => {
	return !fetus.unlocked.sell && fetus.amount >= 25;
}

const checkUnlockAutoClone = (autoClone, money) => {
	return !autoClone.unlocked && (money >= parseInt((autoClone.cost.money / 2), 10))
}

const saveLocalStorage = (state) => {
	console.log('game saved');
	localStorage.setItem(GAME.SAVE_NAME, state);
}