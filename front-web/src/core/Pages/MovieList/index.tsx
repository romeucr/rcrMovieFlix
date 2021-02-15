import MovieCard from "../../components/MovieCard"
import "./styles.css"

const MovieList = () => {
   return (
      <div className="movie-list-container">
         <div className="genre-bar">
            <select name="genre-select" id="genre-select" className="genre-select">
               <option value="genre1">Acao</option>
               <option value="genre2">Aventura</option>
               <option value="genre3">Terror</option>
            </select>
         </div>
         <div className="movies-list">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
         </div>
         <div className="pagination">

         </div>
      </div>
   )
}
export default MovieList