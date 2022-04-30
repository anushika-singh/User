const express= require("express");
const dotenv= require('dotenv');
const connectDB = require("./config/db");
const userRoutes= require('./Routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app=express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Home page");
})
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT= process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on ${PORT} `);
})