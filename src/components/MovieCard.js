import React from 'react'

const MovieCard = (props) =>{
   
    return (
        <div>
            <div className="card" style={{
              display: 'flex',
             
            }}>
  <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`} className="card-img-top" alt= " "/>
  <div className="card-body">
    
    
    
    <p className="card-text">{props.overview}</p>
    <h5 className="card-title">{props.title}</h5>
    <p className='fas fa-envelope-open text-light bg-dark' >IMDB - {props.vote_average}</p>
  </div>
</div>
        </div>
    )
}
export default MovieCard;
/*

export default function CardComponent({ movie }) {
  return (
    <div className="card" key={movie.id}>
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card-desc">{movie.overview}</p>
      </div>
    </div>
  );
}

*/