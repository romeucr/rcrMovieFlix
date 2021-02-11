import { ReactComponent as BtnArrow } from '../../assets/arrow.svg'
import './styles.css'

const ButtonLogin = () => (
      <div className="btn">
         <button className="btn-login">
            <h5 className="btn-login-title">
               LOGAR
            </h5>
         </button>            
         <div className="btn-arrow">
            <BtnArrow />
         </div>
      </div>
   )
export default ButtonLogin