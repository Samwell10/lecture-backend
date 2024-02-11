require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const waitlistroute = require("./routes/WaitlistRoute")
const cors = require('cors')
const app = express()


app.use(cors({
    origin: ["http://localhost:5173", ""]
}))
app.use(express.json())

app.use('/api/lecture', waitlistroute)


mongoose.connect(process.env.MONGO_URL_2)
.then(()=>{
    app.listen(process.env.PORT_2,()=>{
        console.log("LISTENING ON PORT 5000")
    })
})
.catch((err)=>{
    console.log(err)
})
