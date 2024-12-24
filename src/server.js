require('dotenv').config()
const express = require('express') //import express
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8088


configViewEngine(app)

//khai bao route
app.use('/', webRoute)



connection.query(
  'select * from Users u',
  function(err, results, fields){
    console.log(">>> results= ",results);
  }
)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})
