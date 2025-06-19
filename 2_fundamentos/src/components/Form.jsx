import { useState } from 'react'

function Form() {

    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        // manipulação de dados
        // validação
        // envio ao servidor via API
        // loading
        // chamada da função de mensagens de erro/bem sucedido
        

        event.preventDefault()
        console.log("Formulario enviado: " + value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder='Preencha o campo' />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form