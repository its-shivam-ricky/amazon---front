import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART } from "../actionsType";

const initialState = {
    items: []
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: state.items.concat(action.payload)
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity
                        }
                    }
                    return item;
                })
            };

        case CLEAR_CART:
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
}
export default cartReducer;