import React, {useEffect, useState} from 'react'

export default function Manipulate({data, setData, onePost, setOnePost}) {
    const [editedPost, setEditedPost] = useState([]);


    const handlePostUpdate = (id, updatedPost) => {
        setData(data.map((post) => (post.id === id ? updatedPost : post)))
      }


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setOnePost({ ...onePost, [name]: value })
      setEditedPost({ ...onePost, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setOnePost(editedPost);
        handlePostUpdate(onePost.id, onePost)
    }

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


