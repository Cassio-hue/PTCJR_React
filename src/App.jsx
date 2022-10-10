import './App.css'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { Aulas } from './pages/Aulas'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'

import { Aula01 } from './pages/Aulas/Aula01'
import { Aula02 } from './pages/Aulas/Aula02'
import { Aula03 } from './pages/Aulas/Aula03'
import { Aula04 } from './pages/Aulas/Aula04'
import { Aula05 } from './pages/Aulas/Aula05'

import { AuthProvider } from './contexts/AuthContext'
import { RequireAuth } from './components/RequireAuth'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aulas" element={<RequireAuth><Aulas /></RequireAuth>} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="aulas/1" element={<Aula01 />} />
          <Route path="aulas/2" element={<Aula02 />} />
          <Route path="aulas/3" element={<Aula03 />} />
          <Route path="aulas/4" element={<Aula04 />} />
          <Route path="aulas/5" element={<Aula05 />} />
          <Route path="publica" element={<PublicPage />} />

          <Route
            path="protegida"
            element={
              <RequireAuth><ProtectedPage /></RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

function PublicPage() {
  return <h3>Pública</h3>
}

function ProtectedPage() {
  return <h3>Protegida!</h3>
}
