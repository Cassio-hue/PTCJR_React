import { useState, useEffect } from 'react'

export function Exemplo05() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function fetchTheRepo() {
      try {
        const response = await fetch(
          'https://api.github.com/users/CJR-UnB/repos'
        )

        const data = await response.json()

        setRepositories(data)
      } catch {
        setRepositories([])
      }
    }
    fetchTheRepo()
  }, [])

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  )
}
