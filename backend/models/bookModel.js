import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    },
    {
    timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);



//how to create a mongoose database
//1. import mongoose
//2. create a mongoose schema
//3. create a mongoose model
//4. export the model
//5. use the model in your routes