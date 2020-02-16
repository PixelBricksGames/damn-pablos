import * as actionType from "../../units/actions.type";

export const openMenu = () => ({
	type: actionType.UI.MENU.OPEN
});

export const closeMenu = () => ({
	type: actionType.UI.MENU.CLOSE
});

export const toggleMenu = () => ({
	type: actionType.UI.MENU.TOGGLE
});

export const setMenuNotifications = (notifications) => ({
	type: actionType.UI.MENU.SET_NOTIFICATIONS,
	notifications
});

export const selectClonesTab = () => ({
	type: actionType.UI.TABS.CLONES.SELECT
});

export const setTabClonesNotifications = (notifications) => ({
	type: actionType.UI.TABS.CLONES.SET_NOTIFICATIONS,
	notifications
});

export const selectToolsTab = () => ({
	type: actionType.UI.TABS.TOOLS.SELECT
});

export const setTabToolsNotifications = (notifications) => ({
	type: actionType.UI.TABS.TOOLS.SET_NOTIFICATIONS,
	notifications
});

export const selectUpgradesTab = () => ({
	type: actionType.UI.TABS.UPGRADES.SELECT
});

export const setTabUpgradesNotifications = (notifications) => ({
	type: actionType.UI.TABS.UPGRADES.SET_NOTIFICATIONS,
	notifications
});

export const selectAchievementsTab = () => ({
	type: actionType.UI.TABS.ACHIEVEMENTS.SELECT
});

export const setTabAchievementsNotifications = (notifications) => ({
	type: actionType.UI.TABS.ACHIEVEMENTS.SET_NOTIFICATIONS,
	notifications
});

export const selectStatsTab = () => ({
	type: actionType.UI.TABS.STATS.SELECT
});

export const setTabStatsNotifications = (notifications) => ({
	type: actionType.UI.TABS.STATS.SET_NOTIFICATIONS,
	notifications
});

export const selectConfigTab = () => ({
	type: actionType.UI.TABS.CONFIG.SELECT
});

export const setTabConfigNotifications = (notifications) => ({
	type: actionType.UI.TABS.CONFIG.SET_NOTIFICATIONS,
	notifications
});

export const selectCredtisTab = () => ({
	type: actionType.UI.TABS.CREDITS.SELECT
});

export const setTabCredtisNotifications = (notifications) => ({
	type: actionType.UI.TABS.CREDITS.SET_NOTIFICATIONS,
	notifications
});