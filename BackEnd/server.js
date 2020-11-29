const express = require('express')
const connectDB = require('./config/db')

const app = express();

// Connect Database
connectDB()

app.use(express.json({extende:false}))
app.get('/',(req,res) => res.send(`API Running`))

app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/appointment',require('./routes/appointments'))
app.use('/api/profile',require('./routes/profile'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))