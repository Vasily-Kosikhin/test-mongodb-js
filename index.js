import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import statisticsRouter from './router/statisticsRouter.js';

dotenv.config();

const PORT = process.env.PORT || 7000;
const app = express();

app.use(express.json());
app.use(fileUpload({}));

app.use('/api/partical', statisticsRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {});
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
