import * as initState from "./ui.init";
import * as actionType from "./ui.type";
import { MENU_PAGES } from "./../../units/constants";

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
			return getSelectedTabState(state, MENU_PAGES.CLONES);

		case actionType.UI.TABS.CLONES.SET_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.CLONES, true);

		case actionType.UI.TABS.CLONES.CLEAR_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.CLONES, false);

		case actionType.UI.TABS.TOOLS.SELECT:
			return getSelectedTabState(state, MENU_PAGES.TOOLS);

		case actionType.UI.TABS.TOOLS.SET_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.TOOLS, true);

		case actionType.UI.TABS.TOOLS.CLEAR_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.TOOLS, false);

		case actionType.UI.TABS.UPGRADES.SELECT:
			return getSelectedTabState(state, MENU_PAGES.UPGRADES);

		case actionType.UI.TABS.UPGRADES.SET_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.UPGRADES, true);

		case actionType.UI.TABS.UPGRADES.CLEAR_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.UPGRADES, false);

		case actionType.UI.TABS.ACHIEVEMENTS.SELECT:
			return getSelectedTabState(state, MENU_PAGES.ACHIEVEMENTS);

		case actionType.UI.TABS.ACHIEVEMENTS.SET_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.ACHIEVEMENTS, true);

		case actionType.UI.TABS.ACHIEVEMENTS.CLEAR_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.ACHIEVEMENTS, false);

		case actionType.UI.TABS.STATS.SELECT:
			return getSelectedTabState(state, MENU_PAGES.STATS);

		case actionType.UI.TABS.STATS.SET_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.STATS, true);

		case actionType.UI.TABS.STATS.CLEAR_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.STATS, false);

		case actionType.UI.TABS.CONFIG.SELECT:
			return getSelectedTabState(state, MENU_PAGES.CONFIG);

		case actionType.UI.TABS.CONFIG.SET_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.CONFIG, true);

		case actionType.UI.TABS.CONFIG.CLEAR_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.CONFIG, false);

		case actionType.UI.TABS.CREDITS.SELECT:
			return getSelectedTabState(state, MENU_PAGES.CREDITS);

		case actionType.UI.TABS.CREDITS.SET_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.CREDITS, true);

		case actionType.UI.TABS.CREDITS.CLEAR_NOTIFICATIONS:
			return getNotificationTabState(state, MENU_PAGES.CREDITS, false);

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