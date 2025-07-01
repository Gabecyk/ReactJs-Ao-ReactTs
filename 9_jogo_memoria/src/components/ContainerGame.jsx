import React from 'react'


function ContainerGame({ categorias, handleClick }) {
    
    return (
        <div className='containerGame'>
            {categorias.map((letra, index) => (
                <div onClick={() => handleClick(index)}  key={index} value={letra}>{letra.clicado ? letra.letra : "?"}</div>
            ))}
        </div>
    )
}

export default ContainerGame