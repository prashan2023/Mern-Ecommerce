// packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

//utiles
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const port =3000 || process.env.PORT;
const mongo_url = process.env.MONGODB_URL;
const app = express();

connectDB(mongo_url);

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/users", userRouter);
app.get("/",(req,res) =>{
    res.send("Hello world for user management System...")
});

app.listen(port, () => console.log(`Server running at port: ${port}`));



