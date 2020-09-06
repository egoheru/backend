require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')

const path = require ('path')

// importing files
var postMessageRoutes = require('./controllers/postMessageController')

// Define Global Variables
var app = express()
const log = console.log;
const PORT = process.env.PORT || 4000; // Step 1


// //Dummy test
// app.get('/', () => {
//     res.json({
//         message: 'hello world'
//     })
// })


//Configuration of Variables 
app.use(bodyParser.json())
app.use(cors())
app.listen(PORT,()=>console.log('Server started at : ' + PORT) )

//Dummy test
app.get('/', (req, res) => {
    res.json({


        message: 'hello world page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the likepage editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the likepage editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the likepage editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web sites still in their infancy Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like  ',
    })
})

// app.use('/',postMessageRoutes)
app.use('/postMessages',postMessageRoutes)

