import express from 'express'
const app = express();             // express is used
app.use(express.json())




// import route

import productRouter from './routes/product.route.js';
app.use("/api/v1",productRouter) 


export {app}