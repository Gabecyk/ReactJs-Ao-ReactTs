import React from 'react'

function Tentativas({qtdErros}) {
  return (
    <div className='tentativa'>Tentativas restantes: {qtdErros}</div>
  )
}

export default Tentativas