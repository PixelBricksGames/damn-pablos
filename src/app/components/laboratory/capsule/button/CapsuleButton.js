import React from "react";
import PropTypes from "prop-types";

import "./CapsuleButton.scss";

const CapsuleButton = ({ text, unlocked, enabled, onClick }) => (
	<div className={`capsule-button ${unlocked ? 'unlocked' : 'locked'}`}>
		<button
			className={`${enabled ? 'enabled' : 'disabled'}`}
			onClick={ enabled ? onClick : undefined }
		>
			{ text }
		</button>
	</div>
);


export default CapsuleButton;