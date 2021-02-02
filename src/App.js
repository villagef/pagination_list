import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style/style.css';

import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const API = 'https://jsonplaceholder.typicode.com/posts';
  const data = JSON.parse(localStorage.getItem("data"));
  const [current, setCurrent] = useState(1);
  const postsOnPage = 15;
  const totalPosts = data.length;
  const lastPost = current * postsOnPage;
  const postsNumber = data.slice(lastPost - postsOnPage, current * postsOnPage);

  const paginate = (n) => setCurrent(n);


  useEffect(() => {
    (async function getData() {
      const response = await axios.get(API);
      localStorage.setItem('data', JSON.stringify(response.data))
    })();
  }, [])


  

  return (
    <div className="mainWrapper">
            <Pagination postsOnPage={totalPosts} postsNumber={postsNumber} paginate={paginate}/>
      <Posts data={postsNumber} />
    </div>
  );
}

export default App;
