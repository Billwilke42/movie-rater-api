const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const cors = require('cors');
app.use(cors());
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/movie/:imdb_id/ratings', db.getMovieById)
app.post('/ratings', db.addRating)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})