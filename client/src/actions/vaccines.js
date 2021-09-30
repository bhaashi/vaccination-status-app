import * as api from '../api';
import { FETCH_COUNTRIES, FETCH_STATES, FETCH_CITIES, FETCH_CITY, UPDATE_CITY } from '../constants/actionTypes';

export const fetchCountries = () => async (dispatch) => {
    try {
      const { data } = await api.fetchCountries();
  
      dispatch({ type: FETCH_COUNTRIES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const fetchStates = (country) => async (dispatch) => {
    try {
      const { data } = await api.fetchStates(country);
  
      dispatch({ type: FETCH_STATES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
}; 

export const fetchCities = (state) => async (dispatch) => {
    try {
      const { data } = await api.fetchCities(state);
  
      dispatch({ type: FETCH_CITIES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const fetchCity = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchCity(id);
  
      dispatch({ type: FETCH_CITY, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};
  

export const updateCity = (id, city) => async (dispatch) => {
    try {
      const { data } = await api.updateCity(id, city);
  
      dispatch({ type: UPDATE_CITY, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};


  