import { combineReducers } from "redux";
import analysisReducer from "./analysis";

const rootReducer = combineReducers({ analysis: analysisReducer });

export default rootReducer;