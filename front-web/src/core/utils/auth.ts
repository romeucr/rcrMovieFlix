export const CLIENT_ID = 'movieFlix'
export const CLIENT_SECRET = 'movieFlix123'

type LoginResponse = {
   access_token: string
   token_type: string
   expires_in: number
   scope: string
   userName: string
   userId: number
}

export const saveSessionData = (loginResponse: LoginResponse) => {
   localStorage.setItem('authData', JSON.stringify(loginResponse))
}

export const getSessionData = () => {
   const sessionData = localStorage.getItem('authData') ?? '{}'
   const parsedSessionData = JSON.parse(sessionData)
   return parsedSessionData as LoginResponse
}