import CommentCard from "../../components/CommentCard"
import "./styles.css"

const MovieDetail = () => {
   return (
      <div className="movie-detail-container">
         <div className="movie-detail-card">
            <div className="movie-img-container">
               <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8ROVXHf6rtWRPiWNqI9GXWy0Rxv.jpg" alt="Star Wars - Movie" />
            </div>
            <div className="movie-info-container">
               <h1 className="movie-title">Star Wars: The Rise of Skywalker</h1>
               <h3 className="movie-year">2019</h3>
               <p className="movie-subtitle">Every generation has a legend.</p>
               <p className="movie-synopsis">The surviving Resistance faces the First Order once again
               as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of
               generations behind them, the final battle begins.
               </p>
            </div>
         </div>
         <div className="comment-container">
           <div className="text-area">
              Aqui vai o texto
           </div>
           <button className="btn-save">
              Salvar Avaliação
           </button>
         </div>
         <div className="comments-container">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
         </div>
      </div>
   )
}
export default MovieDetail