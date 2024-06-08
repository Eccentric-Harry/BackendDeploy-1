require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => (
    res.send("Testing implicit return arrow finction.")
))

app.get('/login' , (req, res) => {
    res.send("<h1> Please Login to access content!</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})