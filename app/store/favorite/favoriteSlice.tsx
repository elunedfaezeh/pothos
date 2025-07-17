import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
    },
    reducers: {
        addToFavorite: (state, action) => {
            // const itemInFavorite = state.favorite.find((item) => item.id == action.payload.id);
            state.favorite.push({ ...action.payload, });

        },


        removeFavorite: (state, action) => {
            const removeFromFavoritet = state.favorite.filter((item) => item.id !== action.payload.id);
            state.favorite = removeFromFavoritet;
        },


    }


})
export const { addToFavorite,removeFavorite } = cartSlice.actions;
export default cartSlice.reducer;