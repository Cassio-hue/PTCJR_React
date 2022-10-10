import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import {LoginForm} from './Login'

export function AuthStatus() {
  let auth = useAuth()
  let navigate = useNavigate()

  if (!auth.user) {
    return <LoginForm />
  }

  return (
    <p>
      Bem vindo {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'))
        }}
      >
        Sair
      </button>
    </p>
  )
}