import React from "react";
import { Counter } from "../counter/Counter";
import logo from "./../../assets/logo.svg";
import "./Root.scss";

function Root() {
	return (
		<div className="Root">
			<header className="Root-header">
				<img src={logo} className="Root-logo" alt="logo" />
				<Counter />
				<p>
					Edit <code>src/Root.tsx</code> and save to reload.
				</p>
				<span>
					<span>Learn </span>
					<a className="Root-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
						React
					</a>
					<span>, </span>
					<a className="Root-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
						Redux
					</a>
					<span>, </span>
					<a className="Root-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
						Redux Toolkit
					</a>
					,<span> and </span>
					<a className="Root-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
						React Redux
					</a>
				</span>
			</header>
		</div>
	);
}

export default Root;
