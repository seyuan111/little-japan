const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 6000

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGOURL)
.then(() => console.log("connection successful"))
.catch(() => console.log("error connecting to mongodb"))


app.get("/", (req,res) => {
    res.send('API successful')
})

app.listen(port, () => {
    console.log(`port successfully running on port ${port}`)
})