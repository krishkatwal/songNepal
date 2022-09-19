
const express = require(`express`)
const app = express()
const songs = require('./routes/songs')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

//Middleware 
// json to use json in express application
app.use(express.json());
// get method  for home page
app.get('/', (req,res) => {
    res.send(`Welcome to songNepal.com !!`)
})

// Send routes to route
app.use('/songs', songs)

app.use(notFound)

const PORT = 3000
// Combining server and db connection in one function
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running at 3000`)
        })
    } catch (error) {
        console.log(error)
    }
    
}

start()

    