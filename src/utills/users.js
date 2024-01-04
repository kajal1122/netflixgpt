import { createSlice } from "@reduxjs/toolkit";
const Users = createSlice({
    name:'users',
    initialState:{
        loggedInUser:{
            uid:null,
            email:null,
            displayName:null
        }
    },
    reducers:{
        addUser : (state,action)=>{
            console.log(action.payload)
           state.loggedInUser = action.payload
        },
        removeUser :(state)=>{
            state.loggedInUser.uid = null
            state.loggedInUser.email = null
            state.loggedInUser.displayName=null
        }

        


    }
})


export const {addUser,removeUser} = Users.actions
export default Users.reducer;