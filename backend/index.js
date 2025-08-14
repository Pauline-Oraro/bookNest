import express from 'express'
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

//initializing express
const app = express();

app.use(express.json());

//middleware for CORS
app.use(cors());

app.get('/', (req, res)=>{
    res.send('BookNest Store')
})

app.use('/books', booksRoute);

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`);
})
})
.catch((error) => {
    console.log(error);
});


