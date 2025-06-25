import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'
import PostViewer from './components/PostViewer'

function App() {


  return (
    <BrowserRouter>
      {/* 1 - GET com Fetch e Axios */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to='/fetch-posts'>Fetch Posts</Link>
        <Link to='/axios-posts'>Axios Posts</Link>
      </div>
      {/* 2 - Continuando requisições - POST e UPDATE/PUT */}
      <div>
        <Link to='/posts'>Gerenciar posts</Link>
      </div>
      {/* 3 - Tratamento de erros */}
      <div>
        <Link to='posts/1'>Carregar Post 1</Link>
      </div>
      <div>
        <Link to='posts/999'>Carregar post 999</Link>
      </div>
      {/* 4 - Custom hook com API */}
      <div>
        <Link to='posts/view/2'>Carregar Post 2</Link>
      </div>
      <Routes>
        {/* 1 - GET com Fetch e Axios */}
        <Route path='/fetch-posts' element={<FetchPosts />} />
        <Route path='/axios-posts' element={<AxiosPosts />} />
        {/* 2 - Continuando requisições - POST e UPDATE/PUT */}
        <Route path='/posts' element={<PostManager />} />
        {/* 3 - Tratamento de erros */}
        <Route path='posts/:postId' element={<PostLoader />} />
        {/* 4 - Custom hook com API */}
        <Route path='/posts/view/:postId' element={<PostViewer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
