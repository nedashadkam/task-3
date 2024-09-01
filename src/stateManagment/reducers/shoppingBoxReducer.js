import { addToShoppingBox, removeFromShoppingBox } from "../actions/actionTypes";

const initialState = [];

const shoppingBpxReducers = (state = initialState, action) => {
    switch (action.type) {
        case addToShoppingBox:
            return state.concat([action.payload])
         case removeFromShoppingBox:
            return state.filter((item)=> item.id != action.payload)

        default:
            return state;
    }
}

export default shoppingBpxReducers;