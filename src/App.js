import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style/style.css';

import Posts from './components/Posts'

function App() {
  const API = 'https://jsonplaceholder.typicode.com/posts';
  const data = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    (async function getData() {
      const response = await axios.get(API);
      localStorage.setItem('data', JSON.stringify(response.data))
    })();
  }, [data])



  

  return (
    <div className="mainWrapper">
      <Posts data={data} />
    </div>
  );
}

export default App;
