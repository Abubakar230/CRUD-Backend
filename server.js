import connectDB from './db/db.js';
import { app } from './app.js';   // app.js import

import dotenv from 'dotenv'       // dotenv import
dotenv.config({path:"backend/.env"})


const port = process.env.PORT || 4444;       // port



// mongo db connection
connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`this port is running in ${port}`)
    })
})
.catch((err)=>{
    console.log(`This port is not working yet mongodb connection is also failed :`,err)
})