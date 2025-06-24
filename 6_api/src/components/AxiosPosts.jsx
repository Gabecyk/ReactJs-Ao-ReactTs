import { useState, useEffect } from 'react'

import axios from 'axios';

function AxiosPosts() {

    //JSON placeholder
    // id, title, body

    const [posts, setPost] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const axiosPost = async () => {
            try {
                
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

                setPost(response.data)

            } catch (error) {
                setError(error.message)
            }
        };

        axiosPost();

    }, [])

    return (
        <div>
            <h1>Posts (Axios API)</h1>
            {error ? (<p>Erro: {error}</p>) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default AxiosPosts