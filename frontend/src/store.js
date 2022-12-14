import { 
    applyMiddleware, 
    compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import { legacy_createStore as createStore } from 'redux';

const store = createStore(rootReducer, {}, compose(
    applyMiddleware(thunk),
    composeWithDevTools()
));

export default store;