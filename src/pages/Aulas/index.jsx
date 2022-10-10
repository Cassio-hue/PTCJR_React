import { ListPages } from '../../components/ListPages'
import { useAuth } from '../../contexts/AuthContext'
import listClass from './list'

export const Aulas = () => {
  const { user } = useAuth()
  return (
    <>
      <div>
        <h1>Bem vindo {user || "trainee"}!</h1>
        <h2>Relatório das aulas!</h2>
      </div>
      {listClass.map((page, index) => (
        <ListPages key={index} where={page.where} tag={page.tag} />
      ))}
    </>
  )
}
