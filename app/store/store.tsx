import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import favoriteSlice from "./favorite/favoriteSlice";
import authSlice from "./auth/authSlice";
export default configureStore ({
    reducer:{
        cart: cartSlice,
        favorite: favoriteSlice,
        auth: authSlice
    },
    
})
// const rootReducer = combineReducers({
//     cart:cartSlice
// })
//  export default configureStore({
//     reducer:rootReducer
//  })r