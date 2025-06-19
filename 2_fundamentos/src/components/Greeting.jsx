import React from 'react'

function Greeting({ name }) {
  return (
    <div>{name != null && name.length > 0 ? <p>Bem vindo, {name}!</p> : <p>Coloque um nome</p>}</div>
  )
}

export default Greeting