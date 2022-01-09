import { ADD_ITEM, DELETE_BUN, ADD_BUN, DELETE_INGREDIENT, SET_BUN_AMMOUNT, CHANGE_POSITION_1, CHANGE_POSITION_2 } from "../actions/burger-consructor";

const constructorInitialState = {
    elements: [],
    bun: ''

}

export const constructorReducer = (state = constructorInitialState, action) => {
    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bun: action.bunItem ? {...action.bunItem, amount: 1 } : state.bun
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
        case CHANGE_POSITION_1:
            return {
                ...state,
                elements: [...state.elements].splice(action.dragIndex, 1)
            }
        case CHANGE_POSITION_2:
            return {
                ...state,
                elements: [...state.elements].splice(action.hoverIndex, 1, action.item)
            }


        default:
            return {...state }

    }
}