import { Link, Outlet } from 'react-router-dom'
import './index.css'

export default function Layout() {
  return (
    <>
      <header id="headerBar">
        <div id="navbar">
          <Link to="/"><span>Home</span></Link>
          <Link to="sobre"><span>Sobre</span></Link>
          <Link to="aulas"><span>Aulas</span></Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
