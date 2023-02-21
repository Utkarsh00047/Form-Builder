import * as types from "../Constants/ActionTypes";

export const insertConfig = (payload) => ({
	type: types.INSERT_CONFIG,
	payload: payload,
});
export const updateConfig = (payload) => ({
	type: types.UPDATE_CONFIG,
	payload: payload,
});

export const DeleteField =(payload)=>({
	type: types.DELETE_FIELD,
	payload: payload,
});