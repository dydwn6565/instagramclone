import {createSlice,configureStore} from "@reduxjs/toolkit";

const initialState ={userid:" ",name:" ",username:" ",bio:" ",avatar:" ",status:" "};


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
     

        updateUser(state,action){
            console.log(action.payload.userid,action.payload.name)
            state.userid = action.payload.userid;
            console.log(state.userid);
            state.name = action.payload.name;
            state.username = action.payload.username;
            
        },
        deleteUser(state){
            state.userid ="user";
        }
    }
})



const store = configureStore({
    reducer:userSlice.reducer 
    
});

export const userActions = userSlice.actions;

export default store;