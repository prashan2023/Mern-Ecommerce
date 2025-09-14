//Packages
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

// Utils
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const port = 3000 || process.env.PORT;
const mongo_url = process.env.MONGODB_URL;
const app = express();

connectDB(mongo_url);

 
app.use(cors({
      origin: 'http://localhost:5173', // Specify the allowed origin
      credentials: true // Allow credentials
    }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/users",userRouter);

app.get("/",(req,res) =>{
    res.send("Hello prashan!");
});

app.listen(port,() =>console.log(`Server start at localhost: ${port}`));
