import focatia from '../../assets/focatia.png'
import focinha from '../../assets/focinha.png'
import fagnerFrancisco from '../../assets/fagnerFrancisco.png'

export const Sobre = () => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <h1>Oi sou a Focatia da CJR</h1>
        <img
          style={{ width: '400px'}}
          alt="focatia"
          src={focatia}
        />
      </div>
      <div style={{marginTop: '200px', marginBottom: '200px'}}>
        <h1>Oi sou a Focinha da CJR</h1>
        <img
          style={{ width: '400px'}}
          alt="focinha"
          src={focinha}
        />
      </div>
      <div>
        <h1>Olá sou o Fagner Francisco da CJR</h1>
        <img
          style={{ width: '400px'}}
          alt="fagner-francisco"
          src={fagnerFrancisco}
        />
      </div>
    </div>
  )
}
