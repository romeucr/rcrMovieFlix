import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard"
import Pagination from "../../components/Pagination"
import { MovieResponse } from "../../types/Movie"
import { makePrivateRequest } from "../../utils/request"
import "./styles.css"

const MovieList = () => {

   const [movieResponse, setMovieResponse] = useState<MovieResponse>()
   //const [genreResponse, setGenreResponse] = useState<GenreResponse>()
   const [activePage, setActivePage] = useState(0)

   console.log(movieResponse)

   // makePrivateRequest({ url: '/genres' })
   // .then(response => setGenreResponse(response.data))

   useEffect(() => {
      const params = {
         page: activePage,
         genreId: 0
      }

      makePrivateRequest({ url: '/movies', params})
         .then(response => setMovieResponse(response.data))
         
   }, [activePage])

   return (
      <div className="movie-list-container">
         <div className="genre-bar">
            <select name="genre-select" id="genre-select" className="genre-select">
               <option value="genre1">Acao</option>
               
            </select>
         </div>
         <div className="movies-list">
            {movieResponse?.content.map(movie => (
               <MovieCard key={movie.id} movie={movie}/>
            ))}
         </div>
         <div className="pagination">
            {movieResponse && 
               <Pagination 
                  totalPages={movieResponse.totalPages} 
                  activePage={activePage}
                  onChange={page => setActivePage(page)}
               />}
         </div>
      </div>
   )
}
export default MovieList