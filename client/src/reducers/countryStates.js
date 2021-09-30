import { FETCH_COUNTRIES,FETCH_STATES } from "../constants/actionTypes";

export const countryReducer = (countries=[],action) =>{
    switch (action.type) {
        case FETCH_COUNTRIES:
            return action.payload;
        default:
            return countries;
    }
}


export const stateReducer = (states=[],action) =>{
    switch (action.type) {
        case FETCH_STATES:
            return action.payload;
        default:
            return states;
    }
}