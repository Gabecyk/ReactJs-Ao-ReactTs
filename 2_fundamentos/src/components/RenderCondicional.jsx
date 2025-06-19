import React from 'react'

function RenderCondicional({user}) { //se houver user, exiba mensagem de boas vindas
  return (
    <div>
        {user && <h1>Bem vindo de volta, {user}!</h1>}
    </div>
  )
}

export default RenderCondicional