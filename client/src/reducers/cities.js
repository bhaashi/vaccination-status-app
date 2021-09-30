import { FETCH_CITIES,FETCH_CITY,UPDATE_CITY } from "../constants/actionTypes";

export const cityListReducer = (cities=[],action) =>{
    switch (action.type) {
        case FETCH_CITIES:
            return action.payload;
        case UPDATE_CITY:
            return cities.map((city) => (city._id === action.payload._id ? action.payload : city));
        default:
            return cities;
    }
}

export const cityDetailsReducer = (cityDetails={},action) => {
    switch (action.type) {
        case FETCH_CITY:
            return {loading:false,city:action.payload}
        case UPDATE_CITY:
            return {loading:false,city: cityDetails._id === action.payload._id ? action.payload : cityDetails};
      default:
        return cityDetails
    }
  }