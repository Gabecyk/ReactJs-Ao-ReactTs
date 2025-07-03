import { useContext } from 'react'
import { TemaContext } from '../context/TemaContext'

function BarraFerramentas() {

    const contextoTema = useContext(TemaContext);

    if(!contextoTema)
        return null;

  return (
    <div style={{background: contextoTema.tema === "claro" ? '#FFF' : "#000", color: contextoTema.tema === "claro" ? "black" : "white"}}>
        <button onClick={contextoTema.alternarTema}>Alterar tema</button>
    </div>
  )
}

export default BarraFerramentas