import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { update } from "immutable";
import { TIME } from "../../units/constants";

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

const TimeShell = ({ game, tools, agedClones, specialClones, config, updateGame, children }) => {
	const stopTimeInterval = setInterval(() => {
		updateGame(TIME.DELTA);
	}, 1000);
	return <Fragment>{ children }</Fragment>;
};

export default TimeShell;