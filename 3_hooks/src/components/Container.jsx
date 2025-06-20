import React from 'react'

function Container({ children }) {
  return (
    <div>
        <h1>Testando</h1>
        <div className='container'>{children}</div>
        <p>Fim</p>
    </div>
  )
}

export default Container