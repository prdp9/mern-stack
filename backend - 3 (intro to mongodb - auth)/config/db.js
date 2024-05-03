import mongoose from "mongoose"
const MONGO_URI = 'mongodb+srv://nepalbridalfashionshow:MYPqP4ZvSylsAIcH@cluster0.vuve25w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

console.log(process.env.MONGO_URI)

export const connectDB = async() => {
    try {
        mongoose.connect(MONGO_URI)
        console.log('MongoDB Connected')
    } catch (error) {
        console.log('Error connecting to DB',error)
    }
}