const pokemon_init = require('./db/pokemon')
const pokemon_info = require('./db/pokemon_info')
const express = require('express')
const app = express()
const port = 3000

app.get('/pokemon', (req, res) => {
  res.send(pokemon_init)
})

app.get('/pokemon_info', (req, res) => {
  res.send(pokemon_info)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
