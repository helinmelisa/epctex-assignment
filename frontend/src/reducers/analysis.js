import * as types from "../actions/types";

const initialState = {
    analysis: [],
    currentAnalysis: null,
}

const analysisReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ANALYSIS:
            return {
                ...state,
                analysis: action.payload,
            };

        case types.GET_ANALYSIS_DETAIL:
            return {
                ...state,
                currentAnalysis: action.payload,
            };

        case types.CREATE_ANALYSIS:
            return {
                ...state,
                analysis: [...state.analysis, action.payload]
            };
    
        default:
            return {
                ...state
            };
    }
};

export default analysisReducer;