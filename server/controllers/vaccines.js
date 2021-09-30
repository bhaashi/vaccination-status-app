import mongoose from 'mongoose';
import City from "../models/city.js";
import State from "../models/state.js";
import Country from "../models/country.js";

export const getCountries = async(req,res) =>{
   try {

    const countries = await Country.find();
    res.status(200).json(countries);
       
   } catch (error) {
       res.status(404).json({message: error.message});
   }
}

export const getStates = async(req,res) =>{
    const { country } = req.params;

    try {
 
     const states = await Country.find({ name: country });
     res.status(200).json(states);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
 }

 export const getCities = async(req,res) =>{
    const { state } = req.params;

    try {
 
     const cities = await State.find({name:state});
     res.status(200).json(countries);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
 }

 export const getCity = async(req,res) =>{
    const { id } = req.params;

    try {
 
     const city = await City.findById(id);
     res.status(200).json(countries);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
 }

 export const updateCity = async(req,res) =>{
    const { id } = req.params;
    const { name, population, vaccinated, dosesAvailable } = req.body;  

    try {
 
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No city with id: ${id}`);
 
     const updatedCity = { name, population, vaccinated, dosesAvailable, _id: id };
 
     await City.findByIdAndUpdate(id, updatedCity, { new: true });
 
     res.json(updatedCity);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
 }

