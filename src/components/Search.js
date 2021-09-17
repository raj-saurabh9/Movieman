
import React , {useState , useEffect} from 'react'
import MovieCard from './MovieCard'

const Search = () => {

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
        `https://www.omdbapi.com/?t=` +
          searchTerm + `&apikey=19abdb5e`
      )
      setSearchTerm('')
      console.log(   `https://www.omdbapi.com/?t=` +
      searchTerm + `&apikey=19abdb5e`)
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
    
    ////////////////////////////////8<MovieCard Title={movies.Title}  Plot="{movie.Plot}"  Poster="{movie.Poster}"/>
        

    </>
  );
}

export default Search;
