import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style/style.css';

import Posts from './components/Posts';
import Manipulate from './components/Manipulate';

function App() {
  const API = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState([])
  // const [data, setData] = useState(JSON.parse(localStorage.getItem("data")))
  // const data = JSON.parse(localStorage.getItem("data"));
  const [current, setCurrent] = useState(1);
  const postsOnPage = 10;
  const totalPosts = data.length;
  const lastPost = current * postsOnPage;
  const postsNumber = data.slice(lastPost - postsOnPage, current * postsOnPage);

  const paginate = (n) => setCurrent(n);
  const [isActive, setIsActive] = useState(false)


  useEffect(() => {
    (async function getData() {
      const response = await axios.get(API);
      setData(response.data)
    })();
  }, [])


  // const handleUpdate = (index, d) => {
  //   const newTodos = [...data];
  //   newTodos[index] = d;
  //   setData(newTodos);
  // }
  // handleUpdate();

  console.log(data);


  // useEffect(() => {
  //   (async function getData() {
  //     const response = await axios.get(API);
  //     localStorage.setItem('data', JSON.stringify(response.data))
  //   })();
  // }, [])


  

  return (
    <div className="mainWrapper">
      <Posts data={data} onPageData={postsNumber} setData={setData} postsOnPage={totalPosts} postsNumber={postsNumber} paginate={paginate}/>
    </div>
  );
}

export default App;
