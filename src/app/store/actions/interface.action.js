import * as actionType from "../../units/actions.type";

export const openMenu = () => ({
	type: actionType.INTERFACE.MENU.OPEN
});

export const closeMenu = () => ({
	type: actionType.INTERFACE.MENU.CLOSE
});

export const setMenuNotifications = (notifications) => ({
	type: actionType.INTERFACE.MENU.SET_NOTIFICATIONS,
	notifications
});

export const selectClonesTab = () => ({
	type: actionType.INTERFACE.TABS.CLONES.SELECT
});

export const setTabClonesNotifications = (notifications) => ({
	type: actionType.INTERFACE.TABS.CLONES.SET_NOTIFICATIONS,
	notifications
});

export const selectToolsTab = () => ({
	type: actionType.INTERFACE.TABS.TOOLS.SELECT
});

export const setTabToolsNotifications = (notifications) => ({
	type: actionType.INTERFACE.TABS.TOOLS.SET_NOTIFICATIONS,
	notifications
});

export const selectUpgradesTab = () => ({
	type: actionType.INTERFACE.TABS.UPGRADES.SELECT
});

export const setTabUpgradesNotifications = (notifications) => ({
	type: actionType.INTERFACE.TABS.UPGRADES.SET_NOTIFICATIONS,
	notifications
});

export const selectAchievementsTab = () => ({
	type: actionType.INTERFACE.TABS.ACHIEVEMENTS.SELECT
});

export const setTabAchievementsNotifications = (notifications) => ({
	type: actionType.INTERFACE.TABS.ACHIEVEMENTS.SET_NOTIFICATIONS,
	notifications
});

export const selectStatsTab = () => ({
	type: actionType.INTERFACE.TABS.STATS.SELECT
});

export const setTabStatsNotifications = (notifications) => ({
	type: actionType.INTERFACE.TABS.STATS.SET_NOTIFICATIONS,
	notifications
});

export const selectConfigTab = () => ({
	type: actionType.INTERFACE.TABS.CONFIG.SELECT
});

export const setTabConfigNotifications = (notifications) => ({
	type: actionType.INTERFACE.TABS.CONFIG.SET_NOTIFICATIONS,
	notifications
});

export const selectCredtisTab = () => ({
	type: actionType.INTERFACE.TABS.CREDITS.SELECT
});

export const setTabCredtisNotifications = (notifications) => ({
	type: actionType.INTERFACE.TABS.CREDITS.SET_NOTIFICATIONS,
	notifications
});