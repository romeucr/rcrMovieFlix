import ButtonLogin from '../ButtonLogin'
import './styles.css'

const LoginCard = () => {
   return (
      <div className="login-card">
         <h1 className="login-card-title">Login</h1>
         <form className="login-card-form" action="">
            <input 
               className="login-card-input username-input" 
               type="text"
               placeholder="Email"
            />
            <input 
               className="login-card-input password-input" 
               type="password"
               placeholder="Senha"
            />
         </form>
         <ButtonLogin />
      </div>
   )
}
export default LoginCard