import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import Manipulate from './Manipulate';

export default function Posts({data, onPageData, setData, postsOnPage, postsNumber, paginate}) {
    const [onePost, setOnePost] = useState([]);
    
    const handleShow = (id) => {
          data.map((d) => {
               if(id == d.id) {
                   setOnePost(d)
               }
          })
    }
    
    // const handleDelete = (id) => {
    //     setData(data.filter((d) => d.id !== id))
    //     // localStorage.removeItem('data', onePost)
    // }


    return (
        <>
        <Manipulate data={data} setData={setData} onePost={onePost}  setOnePost={setOnePost}/>
        <div className="postsWrapper">
            <Pagination postsOnPage={postsOnPage} postsNumber={postsNumber} paginate={paginate}/>
            <ul className="posts-ul">
                {   
                data.length > 0 ? (
                    onPageData.map(d => (
                        <li className="posts-li" key={d.id}>
                            <button onClick={() => handleShow(d.id)}>Show</button>
                            {/* <button onClick={() => {
                                handleDelete(d.id)
                            }}>Delete</button> */}
                            <p>{d.title}</p>
                        </li>
                    ))
                ) : (
                <li>Empty</li>
                )
 
                }
            </ul>
        </div>
        </>
    )
}
