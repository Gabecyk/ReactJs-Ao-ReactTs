import { useState, useEffect } from 'react'
import axios from 'axios'
import PostForm from './PostForm'
import { useNavigate } from 'react-router-dom'

function PostManager() {
    const navigate = useNavigate();

    const [posts, setPost] = useState([])
    const [error, setError] = useState("")

    const [selectedPost, setSelected] = useState(null);
    const [isEditing, setIsEditing] = useState(null)

    const handleSuccess = (post, operation) => {
        if(operation === "add") {
            setPost((currentPosts) => [post, ...currentPosts])
        } else if(operation === "update") {
            setPost((currentPosts) => currentPosts.map((p) => p.id === post.id ? post : p));
        } else if (operation === "delete") {
            setPost((currentPosts) => currentPosts.filter((p) => p.id !== post.id));
            setSelected(null);
        }
        setIsEditing(false)
    }

    useEffect(() => {

        const axiosPost = async () => {
            try {

                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

                setPost(response.data.slice(0, 5))

            } catch (error) {
                setError(error.message)
            }
        };

        axiosPost();

    }, [])

    const handleEdit = (post) => {
        if(isEditing == true){
            setSelected(null);
            setIsEditing(null);
        } else {
            setSelected(post);
            setIsEditing(true);
        }
    }

   

    return (
        <div>
            <h1>Gerenciar posts</h1>
            <PostForm post={isEditing ? selectedPost : null} onSuccess={handleSuccess}/>
            {isEditing && <button onClick={handleEdit}>Cancelar edição</button>}
            <h2>Postagens</h2>
            {error ? (<p>Erro: {error}</p>) : (
                posts.map((post) => (
                    <div key={post.id} style={{background:"black"}}>
                        <h2 style={{cursor: "pointer"}} onClick={(() => navigate(`/posts/view/${post.id}`))}>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => handleEdit(post)}>Editar</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default PostManager