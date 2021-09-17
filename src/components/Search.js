
import React , {useState } from 'react'
import MovieCard from './MovieCard'

export default function Search() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  /*useEffect(() => {
    getMovies(
      `http://localhost:3000/`
    )
  }, [])*/

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }

  const handleSubmit = (e) => {
    console.log(searchTerm)
    if (searchTerm !== '') {
    
      getMovies(
        `https://api.themoviedb.org/3/search/movie?api_key=7b1a8a5fe60642423d25336eb655595d&language=en-US&query=`+ searchTerm+`&page=1&include_adult=false`
      )
      setSearchTerm('')
      console.log( `https://api.themoviedb.org/3/search/movie?api_key=7b1a8a5fe60642423d25336eb655595d&language=en-US&query=`+ searchTerm+`&page=1&include_adult=false`
      )
    
    } else {
    }
    e.preventDefault()
  }

  const handleChange = (e) => setSearchTerm(e.target.value)

  return (
    <>
    
    <div className="container  my-3">
    <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            className="search"
            placeholder="Enter a movie name"
            onChange={handleChange}
          />
        </form>
        </div> 
        <div className="row">
        
        {movies
          .filter((movie) => movie.vote_average)
          .map((movie) => {
           return <div className="col-md-4" key={movie.id}>
            <MovieCard title={movie.title} overview={movie.overview} poster_path = {movie.poster_path} vote_average={movie.vote_average} key={movie.id} />
           </div>

         
          })}
      </div>
       </>
  );
}


