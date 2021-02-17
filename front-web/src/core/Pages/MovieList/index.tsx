import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard"
import Pagination from "../../components/Pagination"
import { MovieResponse } from "../../types/Movie"
import { Genre } from "../../types/Genre"
import { makePrivateRequest } from "../../utils/request"
import "./styles.css"

const MovieList = () => {
   const [genreResponse, setGenreResponse] = useState<Genre[]>()
   const [movieResponse, setMovieResponse] = useState<MovieResponse>()
   const [activePage, setActivePage] = useState(0)
   const [genreId, setGenreId] = useState('0')

   const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setGenreId(event.target.value)
   }

   useEffect(() => {
      const params = {
         page: activePage,
         genreId: genreId
      }

      makePrivateRequest({ url: '/genres' })
         .then(response => setGenreResponse(response.data))

      makePrivateRequest({ url: '/movies', params })
         .then(response => setMovieResponse(response.data))

   }, [activePage, genreId])

   return (
      <div className="movie-list-container">
         <div className="genre-bar">
            <form>
               <select
                  name="genre-select"
                  className="genre-select"
                  onChange={handleOnChange}
                  value={genreId}
               >
                  <option value="0">All</option>
                  {genreResponse?.map(genre => (
                     <option key={genre.id} value={genre.id}>
                        {genre.name}
                     </option>
                  ))}
               </select>
            </form>
         </div>
         <div className="movies-list">
            {movieResponse?.content.map(movie => (
               <MovieCard key={movie.id} movie={movie} />
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