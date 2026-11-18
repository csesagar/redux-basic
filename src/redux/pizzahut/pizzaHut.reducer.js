import {BUY_PIZZA} from './pizzahut.actionTypes';

let initialState = {
    count : 10
};


// Reducer
export const reducer = (state=initialState , action) => {
    switch(action.type) {
        case BUY_PIZZA:
            return {
                count : (state.count - 1 > 0) ? state.count - 1 : 0
            };
        default : return state;
    }
};
