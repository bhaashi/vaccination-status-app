import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import vaccineRoutes from "./routes/vaccines.js";

const app = express();

app.use('/vaccineStatus',vaccineRoutes);

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://'+process.env.USERNAME+':'+process.env.PASSWORD+'@cluster0.1mfn7.mongodb.net/vaccinationDB';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
