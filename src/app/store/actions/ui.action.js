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

export const setMenuNotifications = () => ({
	type: actionType.UI.MENU.SET_NOTIFICATIONS
});

export const clearMenuNotifications = () => ({
	type: actionType.UI.MENU.CLEAR_NOTIFICATIONS
});

// Clones
export const selectClonesTab = () => ({
	type: actionType.UI.TABS.CLONES.SELECT
});

export const setClonesTabNotifications = () => ({
	type: actionType.UI.TABS.CLONES.SET_NOTIFICATIONS
});

export const clearClonesTabNotifications = () => ({
	type: actionType.UI.TABS.CLONES.CLEAR_NOTIFICATIONS
});

// Tools
export const selectToolsTab = () => ({
	type: actionType.UI.TABS.TOOLS.SELECT
});

export const setToolsTabNotifications = () => ({
	type: actionType.UI.TABS.TOOLS.SET_NOTIFICATIONS
});

export const clearToolsTabNotifications = () => ({
	type: actionType.UI.TABS.TOOLS.CLEAR_NOTIFICATIONS
});

// Upgrades
export const selectUpgradesTab = () => ({
	type: actionType.UI.TABS.UPGRADES.SELECT
});

export const setUpgradesTabNotifications = () => ({
	type: actionType.UI.TABS.UPGRADES.SET_NOTIFICATIONS
});

export const clearUpgradesTabNotifications = () => ({
	type: actionType.UI.TABS.UPGRADES.CLEAR_NOTIFICATIONS
});

// Achievements
export const selectAchievementsTab = () => ({
	type: actionType.UI.TABS.ACHIEVEMENTS.SELECT
});

export const setAchievementsTabNotifications = () => ({
	type: actionType.UI.TABS.ACHIEVEMENTS.SET_NOTIFICATIONS
});

export const clearAchievementsTabNotifications = () => ({
	type: actionType.UI.TABS.ACHIEVEMENTS.CLEAR_NOTIFICATIONS
});

// Stats
export const selectStatsTab = () => ({
	type: actionType.UI.TABS.STATS.SELECT
});

export const setStatsTabNotifications = () => ({
	type: actionType.UI.TABS.STATS.SET_NOTIFICATIONS
});

export const clearStatsTabNotifications = () => ({
	type: actionType.UI.TABS.STATS.CLEAR_NOTIFICATIONS
});

// Config
export const selectConfigTab = () => ({
	type: actionType.UI.TABS.CONFIG.SELECT
});

export const setConfigTabNotifications = () => ({
	type: actionType.UI.TABS.CONFIG.SET_NOTIFICATIONS
});

export const clearConfigTabNotifications = () => ({
	type: actionType.UI.TABS.CONFIG.CLEAR_NOTIFICATIONS
});

// Credits
export const selectCreditsTab = () => ({
	type: actionType.UI.TABS.CREDITS.SELECT
});

export const setCreditsTabNotifications = () => ({
	type: actionType.UI.TABS.CREDITS.SET_NOTIFICATIONS
});

export const clearCreditsTabNotifications = () => ({
	type: actionType.UI.TABS.CREDITS.CLEAR_NOTIFICATIONS
});