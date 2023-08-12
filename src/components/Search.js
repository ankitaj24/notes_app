import React from 'react'
export default function Search({searchText,handleSearchText}) {
  return (
    <div className='search-box'>
        <input value={searchText} onChange={(e)=>handleSearchText(e.target.value)} id="search" placeholder="Search notes..." type="text"/>
    </div>
  )
}
