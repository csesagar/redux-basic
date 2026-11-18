import {combineReducers} from 'redux';
import * as pizzaReducer from './pizzahut/pizzaHut.reducer';

export const rootReducer = combineReducers({
    pizza : pizzaReducer.reducer
});
