import react, {useEffect, useState} from 'react';
import Movie from './components/Movie';


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8897d6373a8d096f760008eabb6376ef';
//const IMG_API = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=8897d6373a8d096f760008eabb6376ef&query=';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect( () => {
    getMovies(FEATURED_API);

  }, []);

  const getMovies = (API) => {
    fetch(API).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results)
    });

  }
  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm('');
    }
    
    
  };

  const handleOnChange = (e) => {

    setSearchTerm(e.target.value);
  };
  //const movies = ['1', '2', '3']
  return (

    <>
      <header>
        <h4 className= "logo">Emmanuel</h4>
        <form onSubmit={handleOnSubmit}>
          <input type="search" placeholder="Search your fav movies...." className="search" value={searchTerm} onChange={handleOnChange}/>
        </form>

      </header>
      <div className="App app-con">
        {movies.length > 0 && movies.map((movie ) =>
          <Movie key={movie.id} {...movie} />
        )}
          
      </div>

    </>
  );
}

//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//https://api.themoviedb.org/3/movie/550?api_key=8897d6373a8d096f760008eabb6376ef
//https://image.tmdb.org/t/p/w500/

export default App;
