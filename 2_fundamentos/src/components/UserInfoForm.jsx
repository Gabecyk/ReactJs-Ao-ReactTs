import { useState } from 'react'

function UserInfoForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()

        //acessar API via fetch ou axios

        console.log(name, email)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder='Digite o seu nome'
        />

        <input type="email" 
        placeholder='Seu email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default UserInfoForm