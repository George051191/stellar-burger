import { combineReducers } from 'redux';
import { burgerDataReducer } from './burger-ingredients'
import { ingredientReducer } from './ingredient';
import { orderReducer } from './order-details';

export const rootReducer = combineReducers({
    burgerData: burgerDataReducer,
    currentSelect: ingredientReducer,
    currentOrder: orderReducer
})