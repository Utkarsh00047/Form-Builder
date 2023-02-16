import * as types from "../Constants/ActionTypes";

export const insertConfig = (payload) => ({
	type: types.INSERT_CONFIG,
	payload: payload,
});
