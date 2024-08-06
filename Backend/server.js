import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'
import foodRouter from './routes/foodRoute.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT || 6000

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGOURL)
    .then(() => console.log("connection successful"))
    .catch(() => console.log("error connecting to mongodb"))

app.use('/api/food', foodRouter)

app.get("/", (req,res) => {
    res.send('API successful')
})

app.listen(port, () => {
    console.log(`port successfully running on port ${port}`)
})