import React from 'react'

export default function Posts({data}) {
    return (
        <>
            <ul>
                {
                    data.map(d => (
                        <li key={d.id}>
                            <p>{d.title}</p>
                            <button>Expand</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
