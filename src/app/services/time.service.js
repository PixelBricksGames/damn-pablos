import store from "../store";
import { batchActions } from 'redux-batched-actions';

import * as Utils from "../utils/utils";
import { updateTimer, updatePartialSeconds, clearPartialSeconds } from "../store/actions/time.action";
import { updateClones, updateClonesPerSecond } from "../store/actions/game.action";

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
			const agedClones = state.get("agedClones");
			const specialClones = state.get("specialClones");
			const time = state.get("time");

			const autoClonesIncrement = Utils.fixJSMultiplier(tools.autoClone.units, tools.autoClone.perSecond);
			const totalClonesPerSecond = autoClonesIncrement;

			const clonesToAdd = parseInt(Utils.fixJSMultiplier(time.partialSeconds, totalClonesPerSecond), 10);

			console.log("clonesToAdd", clonesToAdd);
			if(clonesToAdd >= 1) {
				store.dispatch(batchActions([
					updateTimer(),
					clearPartialSeconds(),
					updateClones(clonesToAdd),
					updateClonesPerSecond(totalClonesPerSecond)
				]));
			} else {
				store.dispatch(batchActions([
					updateTimer(),
					updatePartialSeconds(),
					updateClonesPerSecond(totalClonesPerSecond)
				]));
			}
		}, 100);
	}
};

timeService.start();

export default timeService;