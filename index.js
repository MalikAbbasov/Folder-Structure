import express from 'express';
const app = express()
const port = process.env.PORT;
app.use(express.json());
import 'dotenv/config'
import mongoose from 'mongoose';
import { userRouter } from './src/router/UserRoute.js';


app.use("/users",userRouter) 

mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err.message));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});