import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard"
import Pagination from "../../components/Pagination"
import { MovieResponse } from "../../types/Movie"
import { makePrivateRequest } from "../../utils/request"
import "./styles.css"

const MovieList = () => {

   const [movieResponse, setMovieResponse] = useState<MovieResponse>()

   console.log(movieResponse)

   useEffect(() => {
      const params = {
         page: 0,
         genreId: 0
      }

      makePrivateRequest({ url: '/movies', params})
         .then(response => setMovieResponse(response.data))
   }, [])

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
            {movieResponse?.content.map(movie => (
               <MovieCard key={movie.id} movie={movie}/>
            ))}
         </div>
         <div className="pagination">
            <Pagination totalPages={2}/>
         </div>
      </div>
   )
}
export default MovieList