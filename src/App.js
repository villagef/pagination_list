import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/style.css";

import Posts from "./components/Posts";

function App() {
  const API = "https://jsonplaceholder.typicode.com/posts";
  const [localData, setLocalData] = useState(() => {
    const data = sessionStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });
  const [current, setCurrent] = useState(1);
  const postsOnPage = 10;
  const paginate = (n) => setCurrent(n);
  const lastPost = current * postsOnPage;
  const totalPosts = localData.length;
  const postsNumber = localData.slice(
    lastPost - postsOnPage,
    current * postsOnPage
  );


  useEffect(() => {
    (async function getData() {
      if (sessionStorage.getItem("data") === null || localData == '') {
        const response = await axios.get(API);
        sessionStorage.setItem("data", JSON.stringify(response.data));
      }
    })();
  }, []);

  
  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(localData));
  }, [localData]);


  return (
    <div className="mainWrapper">
      {
        localData == '' ? 
        setTimeout(() => window.location.reload(1), 1500) : 
        <Posts
        data={localData}
        onPageData={postsNumber}
        setData={setLocalData}
        postsOnPage={totalPosts}
        postsNumber={postsOnPage}
        paginate={paginate}
      />
      }
    </div>
  );
}

export default App;
