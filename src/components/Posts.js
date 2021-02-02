import React from 'react'

export default function Posts({data}) {

    return (
        <>
            <ul className="posts-ul">
                {
                    data.map(d => (
                        <li className="posts-li" key={d.id}>
                            <p>{d.title}</p>
                            <button>Expand</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
