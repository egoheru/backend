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
        message: 'Hello world am called Ego Blasius Enko a software developer with specialty in building real world Application.Enabling the plan-to-production innovation process can be difficult. With Siemens Digital Industries Software’s machine design solution, Advanced Machine Engineering, your company can immediately begin the digital innovation journey and improve productivity. Our Advanced Machine Engineering solution ensures greater certainty in the development of mature machines, reducing ramp-up time in production through virtual design and commissioning, resulting in better upfront validation, shorter commissioning times, and more immediate productivity.',
    })
})

// app.use('/',postMessageRoutes)
app.use('/postMessages',postMessageRoutes)

