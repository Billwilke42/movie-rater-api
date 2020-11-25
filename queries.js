const Pool = require('pg').Pool
const pool = new Pool({
  user: 'billwilke',
  host: 'localhost',
  database: 'movieapi',
  password: `${process.env.POSTGRES_PASSWORD}`,
  port: 5432,
})

// app.get('/api/v1/movie/:imdb_ID/ratings', (request, response) => {
//   const imdbID = request.params.imdb_ID
//   console.log(app.locals.ratings)
//   const ratings = app.locals.ratings.find(rating => rating.imdb_ID === imdbID)
//   if(!ratings) {
//     // app.locals.ratings.push({imdb_ID: imdbID, thumbs_up: 0, thumbs_down: 0})
//     return response.status(200).json({imdb_ID: imdbID, thumbs_up: 0, thumbs_down: 0})
//   }
//   return response.status(200).json(ratings)
// })
const createRating = (imdb_id, thumbs_up, thumbs_down, response ) => {
  // const { imdb_id, thumbs_up, thumbs_down } = request.body
  pool.query('INSERT INTO ratings (imdb_id, thumbs_up, thumbs_down) VALUES ($1, $2, $3)', 
  [imdb_id, thumbs_up, thumbs_down],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json([{imdb_id: imdb_id, thumbs_up: 0, thumbs_down: 0}])
  })
}

const getMovieById = (request, response) => {
  const imdbID = request.params.imdb_id;
  console.log(imdbID)
  pool.query('SELECT * FROM ratings WHERE imdb_id = $1', [imdbID], (error, results) => {
    if(results.rows.length === 0) {
      createRating(imdbID, 0, 0, response)
      // response.status(200).json([{imdb_id: imdbID, thumbs_up: 0, thumbs_down: 0}])
    } else if (error) {
      throw error
    } else {
      response.status(200).json(results.rows)
    }
  })
}

const addRating = (request, response) => {
  const { imdb_id, thumbs_up, thumbs_down } = request.body
  pool.query(
    'UPDATE ratings SET thumbs_up = $1, thumbs_down = $2 WHERE imdb_id = $3',
    [thumbs_up, thumbs_down, imdb_id ],
    (error, results) => {
      if(results.rows.length === 0) {

      } 
      if (error) {
        throw error
      }
      response.status(200).json({imdb_id: `${imdb_id}`, thumbs_up: `${thumbs_up}`, thumbs_down: `${thumbs_down}`})
    }
  )
}


module.exports = { getMovieById, addRating }