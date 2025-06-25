import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PostLoader() {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const {postId} = useParams();

    useEffect(() => {

        const fetchPost = async() => {
            setLoading(true);
            setError(null);
            setSuccessMessage(null);

            try {

                if(postId > 500) {
                    throw new Error("Não existe")
                }

                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

                setPost(response.data)
                setSuccessMessage("Post carregado com sucesso!")
                
            } catch (error) {
                setError("Falha ao carregar o post: "+ error.message)
                setPost(null);
            } finally {
                setLoading(false)
            }
            
        };

        fetchPost();
    }, [postId])

  return (
    <div>
        <h1>Post: {postId}</h1>
        {loading && <p>Carregando...</p>}
        {successMessage && <p style={{color: "green"}}>{successMessage}</p>}
        {error && <p style={{color: "red"}}>{error}</p>}
        {post && (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )}
    </div>
  )
}

export default PostLoader