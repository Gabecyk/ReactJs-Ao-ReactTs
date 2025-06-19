import React from 'react'

function NumberList({ numbers }) {


    const mostrar = (index) =>{
        console.log(index)
    }

    //Metodos array = filter, map, reduce, ...

    // chaves - key
    // um identificador unico para cada elemento
  return (
    <ul>
        {numbers.map((number, index) => (
            <li key={index} onClick={() => mostrar(index)}>{number}</li>
        ))}
    </ul>
  )
}

export default NumberList