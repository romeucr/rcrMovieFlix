import { ReactComponent as BtnArrow } from '../../assets/arrow.svg'
import './styles.css'

const ButtonLogin = () => {
   return (
      <div className="btn">
         <button className="btn-login">
            <span className="btn-login-title">
               LOGAR
            </span>
         </button>            
         <div className="btn-arrow">
            <BtnArrow />
         </div>
      </div>
   )
}
export default ButtonLogin