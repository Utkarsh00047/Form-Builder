import * as types from "../Constants/ActionTypes";

const initialState = {
	configList: [],
};

const configReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.INSERT_CONFIG:
			return {
				...state,
				configList: [...state.configList, action.payload],
			};
		default:
			return state;
	}
};

export default configReducer;
