import { useState } from 'react'

export function Exemplo04() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repository-1' },
    { id: 2, name: 'repository-2' },
  ])

  function handleAddRepository() {
    const idRepo = repositories.length + 1
    setRepositories([
      ...repositories,
      { id: idRepo, name: `repository-${idRepo}` },
    ])
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#000000',
          top: '0px',
          height: '50px',
          position: 'sticky',
          fontSize: '32px',
        }}
      >
        <button onClick={handleAddRepository}>Adicionar repositório</button>
      </div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  )
}
