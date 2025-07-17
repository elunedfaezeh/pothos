import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "./authService";
import { storeData, getData, removeData } from "../storage";
const user = getData("user");
export const authSlice = createSlice({
    name: 'auth',
    initialState:user?{isLogedIn:true, user:user} :{isLogedIn:false, user:null} ,
    reducers: {
        login: (state, action) => {
            console.log(action.payload)
            authUser({mobile:action.payload.number})
            state.user = action.payload.user
            state.isLogedIn = true;
            storeData ('user', action.payload.user);
        },
        logout: (state, action) => {
            state.user = null
            state.isLogedIn = false;
            removeData ('user');
        },
    }
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;