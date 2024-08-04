const express = require('express');
const cors = require('cors');

const app = express()
const port = 6000

//middleware
app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send('API successful')
})

app.listen(port, () => {
    console.log(`port successfully running on port ${port}`)
})