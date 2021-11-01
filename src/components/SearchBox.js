import React from 'react'

export default function SearchBox({searchField, searchChange}) {
    return (
        <div>
            <input
            className="b--light-blue bg-dark-blue blue"
            type="search"
            placeholder="search"
            onChange={searchChange}
            />
        </div>
    )
}
