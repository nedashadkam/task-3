import { addToShoppingBox, removeFromShoppingBox } from "./actionTypes";

export const addProduct = (item) => ({
    type: addToShoppingBox,
    payload : item
})

export const removeProduct = (id) => ({
    type: removeFromShoppingBox,
    payload : id
})