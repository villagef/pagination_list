import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/style.css";

import Posts from "./components/Posts";
import Manipulate from "./components/Manipulate";

function App() {
  const API = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  // const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem("data")));
  const [localData, setLocalData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });

  // const data = JSON.parse(localStorage.getItem("data"));
  const [current, setCurrent] = useState(1);
  const postsOnPage = 10;
  const paginate = (n) => setCurrent(n);
  const lastPost = current * postsOnPage;
  const totalPosts = data.length;
  const postsNumber = data.slice(lastPost - postsOnPage, current * postsOnPage);

  //  //set doneTasks into local storage
  useEffect(() => {
    setLocalData(localStorage.getItem("data"));
    // localStorage.setItem('data', JSON.stringify(data))
  }, [data]);

  // console.log(localData);

  localStorage.setItem("data", JSON.stringify(data));

  useEffect(() => {
    (async function getData() {
      const response = await axios.get(API);
      setData(response.data);
    })();
  }, []);

  console.log(data);
  return (
    <div className="mainWrapper">
      <Posts
        data={data}
        onPageData={postsNumber}
        setData={setData}
        postsOnPage={totalPosts}
        postsNumber={postsOnPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
