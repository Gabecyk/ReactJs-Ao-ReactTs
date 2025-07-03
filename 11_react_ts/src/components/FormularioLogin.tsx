import { useState } from 'react'

function FormularioLogin() {

    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(user.length < 1)
            return alert('Preencha o campo de nome!')

        if(password.length < 1)
            return alert('Preencha uma senha')

        console.log(`${user} logado com sucesso!`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={user} placeholder='Digite seu nome...' onChange={(e) => setUser(e.target.value)}/>
        <input type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default FormularioLogin