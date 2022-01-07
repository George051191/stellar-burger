import { ADD_ITEM, DELETE_BUN, ADD_BUN, DELETE_INGREDIENT } from "../actions/burger-consructor";

const constructorInitialState = {
    elements: [],
    bun: ''

}

export const constructorReducer = (state = constructorInitialState, action) => {
    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bun: action.bunItem ? action.bunItem : state.bun
            }
        case ADD_ITEM:
            return {
                ...state,
                elements: [...state.elements, ...action.data]
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                elements: [...state.elements].filter(item => { return item.uid !== action.id })
            }
        default:
            return {...state }

    }
}