import express from 'express';
import { getCountries,getStates,getCities,getCity,updateCity } from '../controllers/vaccines.js';

const router = express.Router();

router.get('/',getCountries);
router.post('/',getStates);
router.post('/viewCities',getCities);
router.get('/:id', getCity);
router.patch('/:id', updateCity);

export default router;