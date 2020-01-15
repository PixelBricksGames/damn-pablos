import React from "react";

import "./Root.scss";

import CounterManager from "./../../managers/CounterManager"

const Root = () => (
    <main className="app">
		<CounterManager></CounterManager>
	</main>
);

export default Root;