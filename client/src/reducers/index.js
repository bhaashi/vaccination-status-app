import { combineReducers } from "redux";
import { countryReducer,stateReducer } from "./countryStates";
import {cityListReducer,cityDetailsReducer} from "./cities";


export default combineReducers({
   countryReducer,stateReducer,cityListReducer,cityDetailsReducer
});