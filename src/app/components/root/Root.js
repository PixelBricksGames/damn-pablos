import React from "react";
import "./Root.scss";

import CounterManager from "./../../managers/CounterManager"
import ClickerManager from "./../../managers/ClickerManager"

const Root = () => (
    <main className="app">
		<CounterManager></CounterManager>
		<ClickerManager></ClickerManager>
	</main>
);

export default Root;