import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: null
    },
    reducers: {
        addToCart: (state, action) => {
            const itemIncart = state.cart.find((item) => item.id == action.payload.id);
            if (itemIncart) {
                itemIncart.quantity++;
                let sum = 0;
                state.cart.forEach(item => { sum += item.price * item.quantity })
                state.total = sum;
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 });
                let sum = 0;
                state.cart.forEach(item => { sum += item.price * item.quantity })
                state.total = sum;
            }
        },
        removeFromCart: (state, action) => {
            const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeFromCart;
            let sum = 0;
            state.cart.forEach(item => { sum += item.price * item.quantity })
            state.total = sum;
        },
        increment: (state, action) => {
            const itemIncart = state.cart.find((item) => item.id == action.payload.id);
            itemIncart.quantity++;
            let sum = 0;
            state.cart.forEach(item => { sum += item.price * item.quantity })
            state.total = sum;
        },
        decrement: (state, action) => {
            const itemIncart = state.cart.find((item) => item.id == action.payload.id);
            if (itemIncart.quantity == 1) {
                const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeFromCart;
                let sum = 0;
                state.cart.forEach(item => { sum += item.price * item.quantity })
                state.total = sum;
            }
            else {
                itemIncart.quantity--;
                let sum = 0;
                state.cart.forEach(item => { sum += item.price * item.quantity })
                state.total = sum;
            }
        },
    }
})
export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;