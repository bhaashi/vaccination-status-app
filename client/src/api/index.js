import axios from 'axios';

const url = 'http://localhost:5000/vaccineStatus';

export const fetchCountries = () => axios.get(url);
export const fetchStates = (selectedCountry) => axios.post(url,{'country':selectedCountry});
export const fetchCities = (selectedState) => axios.post(`${url}/viewCities`,{'state':selectedState});
export const fetchCity = (id) => axios.get(`${url}/${id}`);
export const updateCity = (id, updatedCity) => axios.patch(`${url}/${id}`, updatedCity);

