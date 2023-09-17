
import React, { useEffect, useState } from 'react'

import Post from '../Post'
export default function PostList({ author, currentPage }) {
  const [posts, setPosts] = useState(null)
  const [change, setChange] = useState(false)
  console.log(change)

  const getPosts = () => {
    const apiUrl = 'https://three-points.herokuapp.com/api/posts';
    const auth_token = JSON.parse(localStorage.getItem('authorization'));
  
      return fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${auth_token}`,
          'Content-Type': 'application/json',
      }
      })
      .then(response => response.json())
      .then(data => {
        const tempPosts = [];
        data.map((item) => {
        const nuevoPost = { id: item.id,
                            image: item.image, 
                            createdAt: item.createdAt.slice(0, 10), 
                            likes: item.likes, 
                            autor: item.author.name, 
                            text: item.text, 
                            comments: item.comments.length, 
                            };
        tempPosts.push(nuevoPost);
        setPosts(tempPosts);
      })
    })
    .catch(error => console.error('Error:', error))
  }

  useEffect(() => {
      console.log("ejecuta")
      getPosts()
  },[change])

  const changeLike = (id) => {
    //const postId = id
    const apiUrl = `https://three-points.herokuapp.com/api/posts/${id}/like`;
    const auth_token = JSON.parse(localStorage.getItem('authorization'));
    try {
        return fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${auth_token}`,
            'Content-Type': 'application/json',
          },
          body: ""
        })
        .then(response => {
          console.log(response.status, "changing likes from: " + id)
          setChange(!change)
        })
      } catch (error) {
        console.error('Error:', error);
      }
  }
  return (
    <>
      {posts ? (
        <>
        <div className='container grid w-4/5 gap-4 p-4 mx-auto mb-4 text-center bg-gray-200 min-w-min xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {posts.slice((currentPage-1)*22, currentPage*22)
                .filter((word) => word.text?.toLowerCase().includes(author.toLowerCase()) ||
                          word.autor?.toLowerCase().includes(author.toLowerCase()))
                .map((post, i) => (
                    <Post post={post} key={post.id}  changeLike={changeLike}/>
                ))}
        </div>
        </>
      ) : (
        <div className='text-center'>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}