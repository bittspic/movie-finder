import { useEffect, useState } from "react";
import Movie from "./Component/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8a4f09eab279107e0bef68fb90dbbcc2&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=8a4f09eab279107e0bef68fb90dbbcc2&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      let resp = await fetch(FEATURED_API);
      let data = await resp.json();
      setMovies(data.results);
    }
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      (async () => {
        let resp = await fetch(SEARCH_API + searchTerm);
        let data = await resp.json();
        setMovies(data.results);
      })();
    }
    setSearchTerm("");
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={searchTerm}
            className="search"
            type="text"
            placeholder="Search..."
          ></input>
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
export default App;
