const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN
 || "mongodb+srv://harsh:harsh123@cluster0.at5av.mongodb.net/" ;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })