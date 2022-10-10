import { Link } from 'react-router-dom'
import './index.css'

export const ListPages = ({ where, tag }) => {
  return (
    <ul>
      <Link to={where}>
        {tag}
      </Link>
    </ul>
  )
}
