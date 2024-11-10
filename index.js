const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./Routes/User')


const PORT = 3000



// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database
mongoose.connect('mongodb://localhost:27017/SpiderNews').then(() => console.log('DataBase Connected')).catch((err) => { console.log(err) });

//routes
app.use('/user', userRouter)



app.get('/', (req, res) => {
    res.send('<h1>localHost Started</h1>')
})

app.listen(PORT, () => console.log(`port started at:${PORT}`))


