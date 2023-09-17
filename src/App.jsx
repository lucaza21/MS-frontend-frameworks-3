import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import PostList from './components/PostList'
import Profile from './components/Profile'
import Login from './components/Login'
import Pages from './components/Pagination'

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  
  const [author, setAuthor] = useState('')

  const [profile, setProfile] = useState(false)
  const [post, setPost] = useState(true)

  const filterAuthor = (author) => {
    setAuthor(author);
  }

  const showpProfile = () => {
    setProfile(true)
    setPost(false)
  }

  const showpPosts = () => {
    setPost(true)
    setProfile(false)
  }

  //const [error, setError] = useState(true)
  const [token, setToken] = useState(null)

  
  useEffect(() => {
    console.log("verificando token: " + token)
    const items = JSON.parse(localStorage.getItem('authorization'));
    if (items) {
      setToken(items);
    }
  }, [token]);

  const onLoginComplete = (error, llave) => {
    if(error){
      localStorage.clear();
      setToken(null)
      //setError(error)   
    }
    //setError(error)
    setToken(llave)
    
       
}

  return (
    <>
    
    <div className='min-w-min'>
      <div className='container flex items-center justify-center w-4/5 py-3 mx-auto'>
        <h1 className='text-xl font-bold text-center'>El objetivo del ejercicio es la construcción de una aplicación web React.js con diferentes components que
        tenga como resultado la siguiente interfaz de usuario (Mobile first):</h1>
      </div>

      

      {!token ? <> <Login onLoginComplete={onLoginComplete}/></> 
        : <>
        <Navbar profile={profile} showpProfile={showpProfile} post={post} showpPosts={showpPosts}/>
        {post && 
          <>
          <SearchBar author={author} filterAuthor={filterAuthor}/>
          <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <PostList author={author} currentPage={currentPage}/>
          </>
        }
        {profile && <Profile onLoginComplete={onLoginComplete}/> }
        
        
      </>}
    </div>
    </>
  )
}

export default App
