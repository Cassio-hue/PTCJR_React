import { useState } from 'react'
import { ModalComponent } from '../../../components/Modal'
import './index.css'

import { Exemplo01 } from './Exemplo01'
import { Exemplo02 } from './Exemplo02'
import { Exemplo03 } from './Exemplo03'
import { Exemplo04 } from './Exemplo04'
import { Exemplo05 } from './Exemplo05'


function getExemplo(id) {
  switch (id) {
    case 1:
    return <Exemplo01 />
    case 2:
    return <Exemplo02 />
    case 3:
    return <Exemplo03 />
    case 4:
    return <Exemplo04 />
    case 5:
    return <Exemplo05 />
  }
}

export const Aula02 = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [numExemplo, setNumExemplo] = useState(1)

  function openModal(id) {
    setNumExemplo(id)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
      <h1>Aula 02</h1>
      {[...Array(5).keys()].map(
        value => <button style={{width: '200px'}} key={value} onClick={() => openModal(value+1)}>Exemplo {value+1}</button>
      )}
      <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}>{getExemplo(numExemplo)}</ModalComponent>
    </div>
  )
}

