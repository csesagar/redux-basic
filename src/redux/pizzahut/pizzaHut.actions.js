import { BUY_PIZZA } from './pizzahut.actionTypes';

// Action Creator
export const buyPizza = () => {
    return {
        type : BUY_PIZZA,
        payload : 'Pizza bought!'
    }
}
