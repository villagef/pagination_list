import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const API = 'https://jsonplaceholder.typicode.com/posts';
  const data = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    (async function getData() {
      const response = await axios.get(API);
      localStorage.setItem('data', JSON.stringify(response.data))
    })();
  }, [data])



  

  // useEffect(() => {
  //   localStorage.setItem('data', JSON.stringify(data))
  // }, [data]);

  // console.log(data);
  


  

  return (
    <div className="App">

    </div>
  );
}

export default App;
