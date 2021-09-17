import React  from 'react'
import Navbar from './components/Navbar.js'
import MovieCard from './components/MovieCard.js';
import Search from './components/Search.js';
const App = () => {
 
  return (
    <>
    <Navbar/>
    <Search/>

    <div className="movieCard my-2">
    <MovieCard name ="got" description = "solid"/>
    
    </div>
   
    </>
  );
}

export default App;
