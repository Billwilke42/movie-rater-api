require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_DATABASE}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  port: `${process.env.DB_PORT}`,
})

const createRating = (imdb_id, thumbs_up, thumbs_down, title, response ) => {
  // const { imdb_id, thumbs_up, thumbs_down } = request.body
  pool.query('INSERT INTO ratings (imdb_id, thumbs_up, thumbs_down, title) VALUES ($1, $2, $3, $4)', 
  [imdb_id, thumbs_up, thumbs_down, title],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json([{imdb_id: imdb_id, thumbs_up: 0, thumbs_down: 0, title: ''}])
  })
}

const getMovieById = (request, response) => {
  const imdbID = request.params.imdb_id;
  // const title = request.params.title
  console.log(imdbID)
  pool.query('SELECT * FROM ratings WHERE imdb_id = $1', [imdbID], (error, results) => {
    if(results.rows.length === 0) {
      createRating(imdbID, 0, 0, '', response)
      // response.status(200).json([{imdb_id: imdbID, thumbs_up: 0, thumbs_down: 0}])
    } else if (error) {
      throw error
    } else {
      response.status(200).json(results.rows)
    }
  })
}

const addRating = (request, response) => {
  const { imdb_id, thumbs_up, thumbs_down, title } = request.body
  console.log(request.body)
  pool.query(
    'UPDATE ratings SET thumbs_up = $1, thumbs_down = $2, title = $3 WHERE imdb_id = $4',
    [thumbs_up, thumbs_down, title, imdb_id ],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json({imdb_id: `${imdb_id}`, thumbs_up: `${thumbs_up}`, thumbs_down: `${thumbs_down}`, title: `${title}`})
    }
  )
}


module.exports = { getMovieById, addRating }