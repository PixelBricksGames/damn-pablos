import * as initState from "../state/interface.init";
import * as actionType from "../../units/actions.type";

const interface = (state = initState.interface, action) => {
	switch (action.type) {
		case actionType.INTERFACE.MENU.OPEN:
			return {
				...state,
				open: true
			};
		case actionType.INTERFACE.MENU.CLOSE:
			return {
				...state,
				open: false
			};
		case actionType.INTERFACE.MENU.SET_NOTIFICATIONS:
			return {
				...state,
				notifications: action.notifications
			};

		case actionType.INTERFACE.TABS.CLONES.SELECT:
			return getSelectedTabState(state, "clones");

		case actionType.INTERFACE.TABS.CLONES.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "clones", action.notifications);

		case actionType.INTERFACE.TABS.TOOLS.SELECT:
			return getSelectedTabState(state, "tools");

		case actionType.INTERFACE.TABS.TOOLS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "tools", action.notifications);

		case actionType.INTERFACE.TABS.UPGRADES.SELECT:
			return getSelectedTabState(state, "upgrades");

		case actionType.INTERFACE.TABS.UPGRADES.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "upgrades", action.notifications);

		case actionType.INTERFACE.TABS.ACHIEVEMENTS.SELECT:
			return getSelectedTabState(state, "achievements");

		case actionType.INTERFACE.TABS.ACHIEVEMENTS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "achievements", action.notifications);

		case actionType.INTERFACE.TABS.STATS.SELECT:
			return getSelectedTabState(state, "stats");

		case actionType.INTERFACE.TABS.STATS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "stats", action.notifications);

		case actionType.INTERFACE.TABS.CONFIG.SELECT:
			return getSelectedTabState(state, "config");

		case actionType.INTERFACE.TABS.CONFIG.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "config", action.notifications);

		case actionType.INTERFACE.TABS.CREDITS.SELECT:
			return getSelectedTabState(state, "credits");

		case actionType.INTERFACE.TABS.CREDITS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "credits", action.notifications);

		default:
			return state;
	}
};

const getSelectedTabState = (state, tab) => {
	const newState = {
		...state
	};
	newState.tabs.clones.open = false;
	newState.tabs.tools.open = false;
	newState.tabs.upgrades.open = false;
	newState.tabs.achievements.open = false;
	newState.tabs.stats.open = false;
	newState.tabs.config.open = false;
	newState.tabs.credits.open = false;

	newState.tabs[tab].open = true;
	return newState;
}

const getNotificationTabState = (state, tab, notifications) => {
	const newState = {
		...state
	};
	newState.tabs[tab].notifications = notifications;
	return newState;
}

export default interface;