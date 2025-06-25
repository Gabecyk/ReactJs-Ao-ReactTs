import { useParams } from 'react-router-dom'
import useHttp from '../hooks/useHttp'

function PostViewer() {

    const { postId } = useParams()

    const { data: post, error, loading } = useHttp(`https://jsonplaceholder.typicode.com/posts/${postId}`,
        null,
        null,
        [postId]
    )

    return (
        <div>
            <div>
                <h1>Post: {postId}</h1>
                {loading && <p>Carregando...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {post && (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostViewer