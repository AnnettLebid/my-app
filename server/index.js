import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 6000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);