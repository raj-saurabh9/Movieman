import React from 'react'

const MovieCard = ({Title , Plot , Poster}) =>{
   
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
  <img src="{Poster}" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p className="card-text">{Plot}</p>
    <a href="/details" className="btn btn-dark">Find more</a>
  </div>
</div>
        </div>
    )
}


export default MovieCard