import React, {useState} from 'react'

export default function Manipulate({data, setData, onePost, setOnePost, isActive, setIsActive}) {
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
        setOnePost(editedPost);
        handlePostUpdate(onePost.id, onePost)
        setIsActive(false)
    }

    return (
        <div className="manipulateWrapper">
            {
                <>
                <form
                    className={isActive ? 'active' : 'notActive'}
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
                    <div className="btn-wrapper">
                     <button type="submit">Update</button>
                    </div>
                </form>
                </>
            }
        </div>
    )
}


