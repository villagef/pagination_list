import React from 'react'

export default function Pagination({postsOnPage, postsNumber, paginate}) {
    const totalPages = [];

    for(let i=1; i <= Math.ceil(postsOnPage / postsNumber); i++){
        totalPages.push(i);

        if(i > Math.ceil(postsOnPage / postsNumber.length)) {
            break;
        }
    }

    return (
        <>
            <div className="paginationWrapper">
                <ul className="pagination-ul">
                    {
                        <li className="pagination-li">
                            {
                                totalPages.map(n => (
                                <a onClick={() => paginate(n)} key={n} href="!#">
                                    {n}
                                </a>
                                ))
                            }
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}
