import { useForm } from 'react-hook-form'
import { makeLogin } from '../../utils/request'
import ButtonLogin from '../ButtonLogin'
import './styles.css'

type FormData = {
   username: string;
   password: string;
}

const LoginCard = () => {
   const { register, handleSubmit } = useForm<FormData>()

   const onSubmit = (data: FormData) => {
      console.log(data)
      makeLogin(data)
   }

   return (
      <div className="login-card">
         <h1 className="login-card-title">Login</h1>
         <form className="login-card-form" onSubmit={handleSubmit(onSubmit)}>
            <input
               className="login-card-input username-input"
               type="email"
               placeholder="Email"
               name="username"
               ref={register}
            />
            <input
               className="login-card-input password-input"
               type="password"
               placeholder="Senha"
               name="password"
               ref={register}
            />
            <ButtonLogin />
         </form>
      </div>
   )
}
export default LoginCard