import { useContext } from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

function ComponentFilho() {

    const {mensagem, setMensagem} = useContext(MeuContexto)

  return (
    <div>
        <button onClick={() => setMensagem("Nova Mensagem")}>Nova mensagem</button>
    </div>
  )
}

export default ComponentFilho