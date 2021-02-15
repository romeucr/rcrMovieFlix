import './styles.css'

const MovieCard = () => {
   return (
      <div className="movie-card">
         <img 
            className="card-img"
            src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/AezAErI7zzGsgg9WHX7zp9zz8nU.jpg" 
            alt="imagem do filme"/>
         <div className="card-info">
            <h4 className="title">The Exorcist</h4>
            <h5 className="year">2020</h5>
            <p className="synopsis">O Olho do inimigo está se movendo</p>
         </div>
      </div>
   ) 
}
export default MovieCard