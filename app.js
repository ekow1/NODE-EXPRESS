// import  the needed packages
const express = require('express')
const mongoose = require('mongoose')
const cors  = require('cors')
require('dotenv/config')
const bodyParser = require('body-parser')

const  bookRoutes = require('./controllers/controllers')

// creatre server instance
const app = express()

const PORT = 3000;


// create middleware
app.use(cors())
app.use(bodyParser.json())

app.use('/api/book' , bookRoutes)


// routes

// app.get( '/book' , bookList)
// app.post( '/book' , createBook)
// app.put( '/book' , updateBook)
// app.delete( '/book' , deleteBook)


mongoose.set('strictQuery', false)

mongoose.connect(process.env.DB_CONNECTION , () =>{
 console.log('Connected to DB')
}  , {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(3000  , ()=>{
    console.log(`Server listening on ${PORT}`)
})


