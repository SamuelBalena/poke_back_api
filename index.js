const express = require('express')
const app = express()
const port = 3000
// const pokemon_list = require(path.dirname('./db/pokemon'))
const pokemon_list = require('./db/pokemon')

app.get('/',(req,res) => {
  res.send('Okay')
})

app.get('/pokemon', (req, res) => {
  res.send(pokemon_list)
})

app.listen( port, () => {
  console.log(`Example app listening on port ${port}`)
})
