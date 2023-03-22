import * as types from "../Constants/ActionTypes";

const initialState = {
	configList: [],
	layoutInput: []
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
				if(state.configList[i].widgetId===action.payload.widgetId){
					state.configList[i]=action.payload
				}
			}
			return state;
		
		case types.DELETE_FIELD:
			return {
				...state,
				configList: state.configList.filter(config => {return config.widgetId !== action.payload.widgetId})
			};

		case types.LAYOUT_INPUT:
			return {
				...state,
				layoutInput: (prev) => [...prev, action.payload]
			};
		
		case types.HANDLECHANGE:
      		return {...state, modal:action.payload}	
			
		default:
			return state;
	}
};

export default configReducer;
