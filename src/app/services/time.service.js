import store from "../store";
import { batchActions } from 'redux-batched-actions';

import { TIME } from "../units/constants";
import { updateTimer } from "../store/actions/time.action";
import { updateGame } from "../store/actions/game.action";

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
			const currentStore = store.getState();
			const game = currentStore.get("game");

			store.dispatch(batchActions([
				updateTimer(0.1),
				// updateGame(game)
			]));

		}, 1000);
	}
};

timeService.start();

export default timeService;