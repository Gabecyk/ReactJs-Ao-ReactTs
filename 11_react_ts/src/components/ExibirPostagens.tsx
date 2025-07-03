// Instalação
// npm install axios
// npm install @types/axios --save-dev

import {useEffect, useState} from 'react'

import axios from 'axios'

// Post -> entidade 
import type { Post } from '../types/post';

function ExibirPostagens() {
    const [post, setPost] = useState<Post[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {

        const buscarPostagem = async () => {

            try {
                
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                setPost(response.data.slice(0, 5))

            } catch (error) {
                console.log(error)
            } finally {
                setCarregando(false)
            }
        }

        buscarPostagem()
    }, [])

  return (
    <div>
        <h2>Lista de postagens</h2>
        {carregando ? (<p>Carregando post...</p>) : (
            <ul>
                {post.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default ExibirPostagens