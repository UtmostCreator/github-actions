import dotenv from 'dotenv';
dotenv.config();

import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';


const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
