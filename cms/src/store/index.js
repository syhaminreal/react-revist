import { configureStore } from "@reduxjs/toolkit";
import userReducer, {addUser, clearUser} from "./userSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default store
export{ addUser, clearUser}