import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {value: {name: "", age: 0, email: ""} },
    reducers:{
        //essa função receba o estado inicial do state e uma ação 
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});


export default userSlice.reducer;





