import { Link } from 'react-router-dom'
import { AuthStatus } from '../../components/AuthStatus'

export const Home = () => {
  return (
    <div>
      <h1>Contéudo da aula de hoje</h1>
      <AuthStatus />
      <ul>
        <li>
          <Link to="publica">Página pública</Link>
        </li>
        <li>
          <Link to="protegida">Página protegida</Link>
        </li>
      </ul>
    </div>
  )
}
