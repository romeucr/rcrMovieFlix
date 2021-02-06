import { ReactComponent as HomeImage } from '../../assets/home-image.svg'
import LoginCard from '../../components/LoginCard'
import './styles.css'

const Home = () => {
   return (
      <div className="home-container">
         <div className="home-info">
            <h1 className="home-info-title">Avalie Filmes</h1>
            <p className="home-info-subtitle">Diga o que você achou do seu filme favorito</p>
            <HomeImage className="home-info-image" />
         </div>
         <div className="home-login">
            <LoginCard />
         </div>
      </div>
   )   
}
export default Home
