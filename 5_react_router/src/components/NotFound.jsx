import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>404</h2>
        <p>Página não encontrada</p>
        <Link to='/' >Voltar para Home</Link>
    </div>
  )
}

export default NotFound