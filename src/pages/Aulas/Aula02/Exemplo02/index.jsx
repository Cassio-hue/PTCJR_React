import { useState } from 'react'
import pokebolaImage from '../../../../assets/pokebola.png'
import './index.css'

function randomPokebola() {
  if (Math.random() * (1 - 0) + 0 <= 0.5) {
    return false
  }
  return true
}

function CapturedPokemon() {
  return <h1>Você capturou o pokémon!</h1>
}

function UncaughtPokemon() {
  return <h1>O pokémon fugiu!</h1>
}

function Pokemon({ captured }) {
  if (captured) {
    return <CapturedPokemon />
  }
  return <UncaughtPokemon />
}

export const Exemplo02 = () => {
  const [captured, setCaptured] = useState(true)
  
  return (
    <>
      <h1>Exemplo 02</h1>
      <Pokemon captured={captured} />
      <input className="pokebola" type="image" src={pokebolaImage} name="submit" alt="submit" onClick={() => setCaptured(randomPokebola)}/>  
    </>
  )
}
