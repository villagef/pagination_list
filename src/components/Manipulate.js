import React, {useEffect, useState} from 'react'

export default function Manipulate({data, onePost, setOnePost}) {
    const [editedPost, setEditedPost] = useState([]);

    useEffect(() => {
        setOnePost(editedPost)
        },[])

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setOnePost({ ...onePost, [name]: value })
      setEditedPost({ ...onePost, [name]: value })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setOnePost(editedPost);

    }


    console.log(onePost);
    
    return (
        <div className="manipulateWrapper">
            {
                <>
                <form
                    onSubmit={handleSubmit}
                    >
                    <div className="col-1">
                        <label>Title</label>
                        <textarea
                            className="title-txt"
                            type="text"
                            name="title"
                            value={onePost.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-2">
                        <label>Body</label>
                        <textarea
                            className="body-txt"
                            type="text"
                            name="body"
                            value={onePost.body}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
                </>
            }
        </div>
    )
}


