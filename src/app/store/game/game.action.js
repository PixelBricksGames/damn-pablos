import * as actionType from "./game.type";

export const generateEnergy = (energy) => ({
	type: actionType.GAME.ENERGY.GENERATE,
	energy
});

export const useEnergy = (energy) => ({
	type: actionType.GAME.ENERGY.USE,
	energy
});

export const freeEnergy = (energy) => ({
	type: actionType.GAME.ENERGY.FREE,
	energy
});

export const useRoom = (room) => ({
	type: actionType.GAME.ROOM.USE,
	room
});

export const freeRoom = (room) => ({
	type: actionType.GAME.ROOM.FREE,
	room
});

export const buyRoom = (room) => ({
	type: actionType.GAME.ROOM.BUY,
	room
});