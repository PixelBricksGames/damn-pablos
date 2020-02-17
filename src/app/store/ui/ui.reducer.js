import * as initState from "./ui.init";
import * as actionType from "./ui.type";

const ui = (state = initState.ui, action) => {
	switch (action.type) {
		case actionType.UI.MENU.OPEN:
			return {
				...state,
				open: true
			};
		case actionType.UI.MENU.CLOSE:
			return {
				...state,
				open: false
			};
		case actionType.UI.MENU.TOGGLE:
			return {
				...state,
				open: !state.open
			};
		case actionType.UI.MENU.SET_NOTIFICATIONS:
			return {
				...state,
				notifications: true
			};
		case actionType.UI.MENU.CLEAR_NOTIFICATIONS:
			return {
				...state,
				notifications: false
			};

		case actionType.UI.TABS.CLONES.SELECT:
			return getSelectedTabState(state, "clones");

		case actionType.UI.TABS.CLONES.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "clones", action.notifications, true);
		
		case actionType.UI.TABS.CLONES.CLEAR_NOTIFICATIONS:
			return getSelectedTabState(state, "clones", action.notifications, false);

		case actionType.UI.TABS.TOOLS.SELECT:
			return getSelectedTabState(state, "tools");

		case actionType.UI.TABS.TOOLS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "tools", action.notifications, true);

		case actionType.UI.TABS.TOOLS.CLEAR_NOTIFICATIONS:
			return getSelectedTabState(state, "tools", action.notifications, false);

		case actionType.UI.TABS.UPGRADES.SELECT:
			return getSelectedTabState(state, "upgrades");

		case actionType.UI.TABS.UPGRADES.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "upgrades", action.notifications, true);

		case actionType.UI.TABS.UPGRADES.CLEAR_NOTIFICATIONS:
			return getSelectedTabState(state, "upgrades", action.notifications, false);

		case actionType.UI.TABS.ACHIEVEMENTS.SELECT:
			return getSelectedTabState(state, "achievements");

		case actionType.UI.TABS.ACHIEVEMENTS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "achievements", action.notifications, true);

		case actionType.UI.TABS.ACHIEVEMENTS.CLEAR_NOTIFICATIONS:
			return getSelectedTabState(state, "achievements", action.notifications, false);

		case actionType.UI.TABS.STATS.SELECT:
			return getSelectedTabState(state, "stats");

		case actionType.UI.TABS.STATS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "stats", action.notifications, true);

		case actionType.UI.TABS.STATS.CLEAR_NOTIFICATIONS:
			return getSelectedTabState(state, "stats", action.notifications, false);

		case actionType.UI.TABS.CONFIG.SELECT:
			return getSelectedTabState(state, "config");

		case actionType.UI.TABS.CONFIG.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "config", action.notifications, true);

		case actionType.UI.TABS.CONFIG.CLEAR_NOTIFICATIONS:
			return getSelectedTabState(state, "config", action.notifications, false);

		case actionType.UI.TABS.CREDITS.SELECT:
			return getSelectedTabState(state, "credits");

		case actionType.UI.TABS.CREDITS.SET_NOTIFICATIONS:
			return getSelectedTabState(state, "credits", action.notifications, true);

		case actionType.UI.TABS.CREDITS.CLEAR_NOTIFICATIONS:
			return getSelectedTabState(state, "credits", action.notifications, false);

		default:
			return state;
	}
};

const getSelectedTabState = (state, tab) => {
	const newState = {
		...state
	};
	newState.pages.clones.open = false;
	newState.pages.tools.open = false;
	newState.pages.upgrades.open = false;
	newState.pages.achievements.open = false;
	newState.pages.stats.open = false;
	newState.pages.config.open = false;
	newState.pages.credits.open = false;

	newState.pages[tab].open = true;
	return newState;
}

const getNotificationTabState = (state, tab, notifications) => {
	const newState = {
		...state
	};
	newState.pages[tab].notifications = notifications;
	return newState;
}

export default ui;