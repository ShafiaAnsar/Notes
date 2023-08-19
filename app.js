require ('dotenv').config()

const express = require('express')
const expresLayouts = require('express-ejs-layouts')
const connectdb = require('./server/config/db')
const session = require ('express-session')
const passport = require ('passport')
const MongoStore = require("connect-mongo")
const app = express()
const port = 5000 || process.env.port
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Static Files
app.use(express.static('public'))
connectdb()
//Templating Engines
app.use(expresLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')

//Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
// Handle 404
app.get('*', (req,res)=>{
    res.status(404).render("404")
})
app.listen(port,()=>{
    console.log(`App is running at ${port}`)
})