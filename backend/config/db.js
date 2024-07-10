import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://gyanendrasaurav22:Gyanendra2212@food-delivery.z6vhkcj.mongodb.net/?retryWrites=true&w=majority&appName=Food-Delivery').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.