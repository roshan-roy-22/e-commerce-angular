require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Connection/db')
const router = require('./Routes/route')

const DailyCartServer = express()
DailyCartServer.use(cors())
DailyCartServer.use(express.json())
DailyCartServer.use(router)

// console.log(router);

const PORT = 3000 || process.env.PORT
DailyCartServer.listen(PORT, () => {
    console.log(`Daily Cart Server Started at port : ${PORT}`);
})

DailyCartServer.get('/', (req, res) => {
    res.send('<h1>Daily Cart Server Started...Waiting for Client Request!!!</h1>')
})
