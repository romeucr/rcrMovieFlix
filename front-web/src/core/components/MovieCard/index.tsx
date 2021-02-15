import { Movie } from '../../types/Movie'
import './styles.css'

type Props = {
   movie: Movie
}

const MovieCard = ({ movie }: Props) => {
   return (
      <div className="movie-card">
         <img 
            className="card-img"
            src={movie.imgUri} 
            alt="imagem do filme"/>
         <div className="card-info">
            <h4 className="title">{movie.title}</h4>
            <h5 className="year">{movie.year}</h5>
            <p className="subtitle">{movie.subTitle}</p>
         </div>
      </div>
   ) 
}
export default MovieCard