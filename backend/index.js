const express = require("express")
const mongoose = require("mongoose")
const app = express();

mongoose.connect(proccess.env.MONGO_URL, {useNewUrlParser: true});

app.listen(8800,()=>{
    console.log("Backend server is running!")
})