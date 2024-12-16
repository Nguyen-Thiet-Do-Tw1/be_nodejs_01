const express = require('express') //import express

const path = require('path')
const app = express()
const port = 8080

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/test', (req, res) => {
  res.render('sample.ejs')
}) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Server running at http://localhost:${port}/`);
})
