import mongoose from "mongoose";

const connectDB = async(mongo_url) =>{
    try {
        await mongoose.connect(mongo_url);
        console.log(`Database connected successfully...`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;