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
		case types.UPDATE_CONFIG:
			for(var i=0;i<state.configList.length;i++)
			{
				if(state.configList[i].id===action.payload.id){
					state.configList[i]=action.payload
				}
			}

			return state;
			
		default:
			return state;
	}
};

export default configReducer;
