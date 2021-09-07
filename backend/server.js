import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import userRouter from './routers/userRouter.js';
import productRouter from "./routers/productRouter.js";
import uploadRouter from './routers/uploadRouter.js';


dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://admin:admin123@cluster0.5qrjg.mongodb.net/thesneakerplug?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use('/api/uploads', uploadRouter);

app.use('/api/users/', userRouter );

app.use('/api/products/', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});