import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import analysisRoutes from "../backend/routes/analysis.js"

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));
app.use(cors());

app.use("/analysis",analysisRoutes);

const PORT = process.env.PORT || 5001;


mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
 })
 .catch(error => {
    console.log(error.message);
 })