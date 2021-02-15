import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { saveSessionData } from '../../utils/auth'
import { makeLogin } from '../../utils/request'
import ButtonLogin from '../ButtonLogin'
import './styles.css'

type FormData = {
   username: string;
   password: string;
}

const LoginCard = () => {
   const { register, handleSubmit } = useForm<FormData>()
   const [hasError, setHasError] = useState(false)
   const history = useHistory()

   const onSubmit = (data: FormData) => {
      makeLogin(data)
         .then(response => {
            setHasError(false)
            saveSessionData(response.data)
            history.push('/movies')
         })
         .catch(() => {
            setHasError(true)
         })
   }

   return (
      <div className="login-card">
         <h1 className="login-card-title">Login</h1>
         {hasError && (
            <div className="alert">
               Usuário ou senha inválidos!
            </div>
         )}
         <form className="login-card-form" onSubmit={handleSubmit(onSubmit)}>
            <input
               className="login-card-input username-input"
               type="email"
               placeholder="Email"
               name="username"
               ref={register({ required: true })}
            />
            <input
               className="login-card-input password-input"
               type="password"
               placeholder="Senha"
               name="password"
               ref={register({ required: true })}
            />
            <ButtonLogin />
         </form>
      </div>
   )
}
export default LoginCard