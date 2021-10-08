import { combineReducers } from "redux";
import  {countries,states} from "./countryStates";
import { cityLists,cityDetails } from "./cities";



export const rootReducer =  combineReducers({
   countries,states,cityLists,cityDetails
});