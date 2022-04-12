import { combineReducers } from "redux";
import userTypeReducer from "./userTypeReducer";

const allReducers = combineReducers({
    customerType: userTypeReducer
})

export default allReducers;