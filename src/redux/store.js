import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {rootReducer} from "./rootReducer";
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

let middleware = [logger, thunk];   // as if add multiple middleware, we can add them in this array

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
