import { useEffect } from 'react'

function Ex1({ dadoUser }) {

    useEffect(() => {
        document.title = dadoUser.nome + " - " + dadoUser.cargo;
    }, [dadoUser])

  return (
    <div>
        <h2>Ex1</h2>
        <p>{dadoUser.nome}</p>
        <p>{dadoUser.cargo}</p>
    </div>
  )
}

export default Ex1