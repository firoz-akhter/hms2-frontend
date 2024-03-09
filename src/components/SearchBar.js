import React from 'react'
import "./css/SearchBar.css"
import search from "./img/search.svg"

function SearchBar() {
  return (
    <div>
        <div className='searchBar-div'>
            <img src={search} alt='searchIcon' />
            <input placeholder='Search Doctor and We will find The Session Available' />
            <button className='search-btn'>Search</button>
        </div>
    </div>
  )
}

export default SearchBar