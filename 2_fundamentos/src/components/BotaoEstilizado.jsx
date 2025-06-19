import React from 'react'

function BotaoEstilizado() {

    const estiloDoBotao = {
        backgroundColor: "black", //cammelCase
        color: "red",
        padding: "15px 32px",
        cursor: "pointer"
    };

  return (
    <button style={ estiloDoBotao }>Clique em mim!</button>
  )
}

export default BotaoEstilizado