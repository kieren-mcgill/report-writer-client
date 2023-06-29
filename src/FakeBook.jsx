import { getPostsApi } from './firebase-client';
import { useEffect, useState } from 'react';
import Posts from './Posts';

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getPostsApi()
      .then(setPosts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Posts posts={posts}/>
  );
};

export default App;
