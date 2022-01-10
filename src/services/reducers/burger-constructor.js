import { ADD_ITEM, ADD_BUN, DELETE_INGREDIENT, CLEAN_INGREDIENTSID, REORDER_INGREDIENTS } from "../actions/burger-consructor";

const constructorInitialState = {
    elements: [],
    bun: '',
    elementsIdArray: []
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
                elements: [...state.elements, ...action.data],
                elementsIdArray: [...state.elementsIdArray, ...[...action.data].map(item => { return item._id })]
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                elements: [...state.elements].filter(item => { return item.uid !== action.id })

            }
        case REORDER_INGREDIENTS:
            return {
                ...state,
                elements: action.data
            }
        case CLEAN_INGREDIENTSID:
            return {
                ...state,
                elements: [],
                elementsIdArray: [],
                bun: ''
            }
        default:
            return {...state }

    }
}