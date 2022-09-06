require ('dotenv').config()

const pokemon_list = require('./db/pokemon')
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
  res.send('Okay')
})

app.get('/pokemon', (req, res) => {
  res.send(pokemon_list)
})

// eslint-disable-next-line no-undef
app.listen( process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
